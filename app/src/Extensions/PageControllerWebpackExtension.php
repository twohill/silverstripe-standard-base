<?php

namespace Twohill\Common\Extensions;

use SilverStripe\Core\Extension;
use SilverStripe\Control\Director;

class PageControllerWebpackExtension extends Extension 
{
    /**
     * Checks to see if Webpack is running. Used for hot-reloading
     */
    public function WebpackRunning() 
    {
        if (Director::isDev()) {
            return !!@fsockopen($_ENV['WEBPACK_IP'], $_ENV['WEBPACK_PORT'], $errorNumber, $errorMsg, 2);
        }
    }

    public function WebpackIP() 
    {
        return $_ENV['WEBPACK_IP'];
    }
    public function WebpackPort() 
    {
        return $_ENV['WEBPACK_PORT'];
    }
}