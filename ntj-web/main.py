import bottle


@bottle.route('/')
def home():
    return bottle.template('index.html')

app = bottle.default_app()
