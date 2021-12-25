window.addEventListener('load',()=>{
	var app = new Vue({
	  el: '#website',
	  data: {
	    url:'',
	    id:'',
	    link:'',
	  },
	  methods:{
		buscar:function(){
	 			if (this.url!="") {
		 			this.id=this.url.substr(this.id.length - 11);
		 			this.link=`https://www.yt-download.org/api/widget/mp3/${this.id}`;
	 			}
	 			else{
	 				alert("O Campo está em branco!");
	 			}
	 		}
		},
	})
})