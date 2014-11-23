% include('header.tpl')
<body class=" pages pages-index">
<div id="wrapper">
    % include('main-nav.tpl')
<div class="content">
    <section class="hero"  style="background: #ffffff">
        <div class="hero-canvas"  style="background: #ffffff">
            <br>
            <h1>UNDER CONSTRUCTION</h1>
            <br>
    <p style="text-align: center">The information here is still being created. If you would like to donate to help
    us get personal laptops into the hands of kids, please email us directly at <a href="mailto:info@NextCodeNinja.org">info@nextcodeninja.org</a></p>
            <br>
    <p style="text-align: center">If you'd like to know more about how your donations will be used, please check out our <a href="/faqs">FAQs</a></p>
        </div>
    </section>

    <section class="hero">
        <div class="hero-canvas">
            <div class="donate">
                <h2>You're donating</h2>

                <form accept-charset="UTF-8" action="https://NextCodeNinja.org/pledge" method="get">
                    <div style="display:none"><input name="utf8" type="hidden" value="&#x2713;"/></div>
                    <span class="dollar">$</span>
                    <input class="form-control amount input-lg" id="amount" min="1" name="amount" step="1" type="number"
                           value="25"/>
                    <span class="usd">USD</span>
                    <input class="btn btn-primary btn-lg" name="commit" type="submit" value="Donate"/>
                </form>

            </div>
            <div class="so-far">
                <div class="text">

                    <h2>{{comps}} computers pledged so far</h2>

                    <h3>thanks!</h3>
                </div>

                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
                <img alt="Computer" class="computer"
                     src="../static/pages/index/computer-b6ac42fdfdd93ccfb68c7f8431b927e5.png"/>
            </div>
            <img alt="Machine" class="machine"
                 src="../static/pages/index/machine-41a5f672e205258952713da46df5147c.png"/>
            <img alt="Kid hero" class="kid-hero"
                 src="../static/pages/index/kid-hero-67c93cca3c525e1d633ac8c52deae44a.png"/>

            <div class="to-go">
                <span class="amount">${{to_go}}</span>
                <span class="text">to go</span>
            </div>
            <div class="thermometer">
                <img alt="Thermometer 25"
                     src="../static/pages/index/thermometer-25-608e5808ce4cf4789708e253173032eb.png"/>

                <div class="amount">${{so_far}}</div>
            </div>
        </div>
    </section>
    <section class="help">
        <div class="container">
            <div class="row">
                <div class="col-sm-3 kid-1">
                    <img alt="Kid 1" src="../static/pages/index/kid-1-d4370c7908b79485e6c4d234ecd6c2ad.png"/>
                </div>
                <div class="col-sm-6 text">
                    <h3>
                        Help us ensure that every child has the opportunity to learn how to code.
                    </h3>

                    <h3 class="alt">
                        For every $250 donated, we will ship a new laptop to a child waiting to
                        enroll in a programming class.
                    </h3>
                </div>
                <div class="col-sm-3 kid-2">
                    <img alt="Kid 2" src="../static/pages/index/kid-2-6fd0ae3fb85d38d87834a6ac9189d7d3.png"/>
                </div>
            </div>
        </div>
    </section>
</div>
% include('footer.tpl')