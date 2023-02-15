import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavs = defineStore('favs', {
  state: () => ({
  	actors: {},
  	shows: {},
  	switchFavs: false,
    id: 0,
  }),
  actions: {
    async addWish(item, actShow) {
      let obj = {};
      let number = item.id;
      if (actShow == "Actors") {
      
      	this.actors[number] = {
      	
      		"id": item.id,
      		"name": item.name,
      		"image": item.image,
      	
      	}
      	
      	obj = this.actors
      
      } else {
      
      	this.shows[number] = {
      	
      		"id": item.id,
			"name": item.name,
			"url": item.url,
			"genres": item.genres,
			"image": item.image,
			"summary": item.summary
      	
      	}
      	
      	obj = this.shows
      
      }
      
      const res = await fetch(`http://localhost:3000/wishlist${actShow}`, {
				method: 'POST',
				headers: {
				
					'Content-Type': 'application/json'
				
				},
				body: JSON.stringify(obj),
			});
			
		res.json().then(data => { console.log(data) });
		
		console.log(Object.keys(this.actors).length)
		
    },
    async deleteWish(item, actShow) {
    
    	let obj;
    
    	if (actShow == "Actors" || actShow == "actors") {
    	
    		delete this.actors[item.id]
    		obj = this.actors;
    	
    	} else {
    	
    		delete this.shows[item.id]
    		obj = this.shows;
    	
    	}
    	
    	const res = await fetch(`http://localhost:3000/wishlist${actShow}`, {
				method: 'POST',
				headers: {
				
					'Content-Type': 'application/json'
				
				},
				body: JSON.stringify(obj),
			});
			
		res.json().then(data => { console.log(data) });
		
	}
  },
})
