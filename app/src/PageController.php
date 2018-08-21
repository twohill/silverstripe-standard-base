<?php

namespace {

    use SilverStripe\CMS\Controllers\ContentController;
    use SilverStripe\Control\Director;

    class PageController extends ContentController
    {
        /**
         * An array of actions that can be accessed via a request. Each array element should be an action name, and the
         * permissions or conditions required to allow the user to access it.
         *
         * <code>
         * [
         *     'action', // anyone can access this action
         *     'action' => true, // same as above
         *     'action' => 'ADMIN', // you must have ADMIN permissions to access this action
         *     'action' => '->checkAction' // you can only access this action if $this->checkAction() returns true
         * ];
         * </code>
         *
         * @var array
         */
        private static $allowed_actions = [];

        protected function init()
        {
            parent::init();
            // You can include any CSS or JS required by your project here.
            // See: https://docs.silverstripe.org/en/developer_guides/templates/requirements/
        }

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
}
