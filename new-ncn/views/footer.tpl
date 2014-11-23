<footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 logo hidden-xs">
                    <img alt="Logo" src="../static/ncn-logo.png" />
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        <div class="col-sm-8 links">
                            <ul>
                                <!--<li><a href="/about">About</a></li>-->
                                <li><a href="/faqs">FAQs</a></li>
                                <!--<li><a href="http://blog.NextCodeNinja.org/">Blog</a></li>-->
                                <!--<li><a href="index.html">Privacy Policy</a></li>-->
                                <!--<li><a href="index.html">We&#39;re Hiring!</a></li>-->
                            </ul>
                        </div>
                        <div class="col-sm-4 actions">
                            <a class="btn btn-lg btn-primary" href="/donations">DONATE</a>
                            <ul class="social">
                                <!--<li><a href="https://twitter.com/NextCodeNinja"><i class="fa fa-twitter"></i></a></li>-->
                                <!--<li><a href="https://www.facebook.com/NextCodeNinja"><i class="fa fa-facebook-square"></i></a></li>-->
                                <!--<li><a href="http://instagram.com/NextCodeNinja"><i class="fa fa-instagram"></i></a></li>-->
                                <!--<li><a href="mailto:info@NextCodeNinja.org"><i class="fa fa-envelope"></i></a></li>-->
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script>
      ga(function(tracker) {
        $.post('/set_ga_client_id', { client_id:tracker.get('clientId') });
    })
    </script>
</div>
</body>
</html>