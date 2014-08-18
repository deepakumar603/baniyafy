import Ember from 'ember';

export default Ember.ObjectController.extend({
	imagePath : "black.jpg",
	sub : function (){
		var name = this.get("name");
		if(name === "about") {
		this.transitionTo('about');
		}
	}
});