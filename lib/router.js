Router.configure({
	layoutTemplate: 'layout'
});
Router.route('/', function() {
	this.render('layout')
});
Router.route('/user', function(){
	this.render('user')
});
