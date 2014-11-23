from lib.bottle.bottle import route, app, get, post, request, error, static_file, debug, template
from google.appengine.ext.webapp.util import run_wsgi_app

app = app()


@route('/')
@route('/index')
def index():
    return template('index')


@route('/donations')
def index():
    to_go = 225
    so_far = 25
    comps = 2
    return template('donations', to_go=to_go, so_far=so_far, comps=comps)


@route('/faqs')
def faqs():
    return template('faqs')


@route('/static/<filepath:path>')
def serve_static(filepath):
    return static_file(filepath, root='./static/')



#############
###TESTING###
#############



@get('/login')
def login():
    return '''
        <form action="/login" method="post">
            Username: <input name="username" type="text" />
            Password: <input name="password" type="password" />
            <input value="Login" type="submit" />
        </form>
    '''

# @post('/login')
# def do_login():
#     username = request.forms.get('username')
#     password = request.forms.get('password')
#     if check_login(username, password):
#         return '<p>Thank you for logging in.</p>'
#     else:
#         return '<p>Login failed.</p>'

@error(404)
def error404(error):
    return static_file('404.html', root='./templates/')

def main():
    debug(True)
    run_wsgi_app(app)

#app = bottle.default_app()

if __name__ == '__main__':
    main()