		window.addEventListener("scroll",change)
		
		function change(){
		var a=document.getElementById("rex")
		var b=document.getElementById("about")
		var c=document.getElementById("resume")
		var d=document.getElementById("portfolio")
		var e=document.getElementById("gu")
		var scrollvalue=window.scrollY
		console.log(scrollvalue)	
		if(scrollvalue<900){
			 b.setAttribute("class","p d-block");
			 c.setAttribute("class","p d-none");
			a.setAttribute("class","rex-1 ")
		}

		
		else if(scrollvalue<1350){
				 d.setAttribute("class","p d-none");
				 b.setAttribute("class","p d-none");
			c.setAttribute("class","p d-block");
					a.setAttribute("class","rex-2")
				}
			
		else if	(scrollvalue<1700){
				 d.setAttribute("class","p d-block");
				 c.setAttribute("class","p d-none");
				 e.setAttribute("class","p d-none");

			
			a.setAttribute("class","rex-3")
			}
		else if	(scrollvalue>1600){
				 d.setAttribute("class","p d-none");
				
				e.setAttribute("class","p d-block")
				console.log(scrollvalue)
			a.setAttribute("class","rex-0")

		}
	
		}
			
		// home-sectiom
			let homes=document.getElementById("nav-home")	



		function home(){
			 console.log("guna")
			homes.classList.toggle("nahome")
		
		}
			