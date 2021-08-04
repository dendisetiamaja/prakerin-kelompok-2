<header class="header home-header"
        style="background: url({{URL::to('assets/dist/img/company/company-banner.jpg')}}) top center no-repeat; background-size: cover;">
    <div class="header-overlay"></div>
    <div class="headroom-sticky home-page-menu">
        <nav class="navbar navbar-default navbar-home">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html"><img src="../assets/dist/img/company/company-logo.png" alt=""/></a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li class="active"><a href="home.blade" >Home</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Jurusan <span class="ion-chevron-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="">RPL</a></li>
                                <li><a href="">Multimedia</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Aktivitas <span class="ion-chevron-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-list-thumb.html">Blog List Thumb</a></li>
                                <li><a href="blog-listing.html">Blog Listing</a></li>
                                <li><a href="blog-masonary.html">Blog Masonary</a></li>
                                <li><a href="post-image-single.html">Single Image Post</a></li>
                                <li><a href="post-gallery-single.html">Single Gallery Post</a></li>
                                <li><a href="post-video-single.html">Single Video Post</a></li>
                                <li><a href="post-audio-single.html">Single audio Post</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Fasilitas <span class="ion-chevron-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="users.html"></a></li>
                                <li><a href="user-profile.html"></a></li>
                                <li><a href="registration.html"></a></li>
                            </ul>
                        </li>
                        <li class="active"><a href="kontak.blade" >Kontak</a></li>
                        </a>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>

    <div class="header-body">
        <div class="container">
            <h1 class="wow fadeInUp">SMK Mahaputra</h1>
            <p class="wow fadeInUp">Scholar helps you find companies that you need from anywhere on the world. Let’s explore.</p>
            <div class="rq-search-wrapper">
                <div class="rq-search-toggle">
                    <button class=" rq-btn rq-btn-primary rounded"><b class="ion-android-search"></b></button>
                </div>
                <div class="rq-search-container">
                    <div class="rq-search-single">
                        <div class="rq-search-content">
                            <span class="rq-search-heading">Keywords</span>
                            <input type="text" class="rq-form-element" placeholder="What are you looking for ?"/>
                        </div>
                    </div>
                    <div class="rq-search-single">
                        <div class="rq-search-content">
                            <span class="rq-search-heading">Location</span>
                            <select name="categories" class="category-option">
                                <option value="0">Pick a location</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                            </select>
                        </div>
                    </div>
                    <div class="rq-search-single">
                        <div class="rq-search-content last-child">
                            <span class="rq-search-heading">Categories</span>
                            <select name="categories" class="category-option">
                                <option value="0">Choose category</option>
                                <option value="1">Category one</option>
                                <option value="2">Category two</option>
                                <option value="3">Category three</option>
                                <option value="4">Category four</option>
                                <option value="5">Category five</option>
                            </select>
                        </div>
                    </div>
                    <div class="rq-search-single search-btn">
                        <div class="rq-search-content">
                            <button class="rq-btn rq-btn-primary fluid-btn">Search <i class="arrow_right"></i></button>
                        </div>
                    </div>
                </div> <!-- / .search-container -->
            </div>
        </div>
    </div> <!-- /.header-body -->
</header> <!-- end header -->
@yield('header')
