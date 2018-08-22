<header>
    <section class="container">
        <nav class="navbar navbar-expand-md navbar-light " >
            <a class="navbar-brand" href="$Page('home').Link">$SiteConfig.Title</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems" aria-controls="navbarItems" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-md-end" role="navigation" id="navbarItems">
                <ul class="navbar-nav ">
                    <% loop $Menu(1) %><li class="nav-item $LinkOrSection"><a class="nav-link text-primary" href="$Link"> $Title</a></li><% end_loop %>
                </ul>
            </div>
        </nav>
    </section>
</header>