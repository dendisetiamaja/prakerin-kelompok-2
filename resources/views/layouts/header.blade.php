<header class="header home-header"
        style="background: url({{URL::to('assets/dist/img/company/company-listing-banner.jpg')}}) top center no-repeat; background-size: cover;">
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
                        <li class="active"><a href="home">Beranda</a></li>
                        <li class="active"><a href="tentang" >Tentang</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Jurusan <span class="ion-chevron-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="rpl">RPL</a></li>
                                <li><a href="multimedia">Multimedia</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                               aria-haspopup="true" aria-expanded="false">Aktivitas <span class="ion-chevron-down"></span></a>
                            <ul class="dropdown-menu">
                                <li><a href="eskul">Ekstrakulikuler</a></li>
                                <li><a href="osis">Kegiatan Osis</a></li>
                            </ul>
                        </li>
                        <li class="active"><a href="fasilitas" >Fasilitas</a></li>

                        <li class="active"><a href="kontak" >Kontak</a></li>
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
            <p class="wow fadeInUp">Selamat Datang di Website SMK Mahaputra Cerdas Utama</p>
            <div class="rq-search-wrapper">
                <div class="rq-search-toggle">
                    <button class=" rq-btn rq-btn-primary rounded"><b class="ion-android-search"></b></button>
                </div>

            </div>
        </div>
    </div> <!-- /.header-body -->
</header> <!-- end header -->
@yield('header')
