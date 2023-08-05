		
		function change(){
		var a=document.getElementById("rex")
		var b=document.getElementById("about")
		var c=document.getElementById("resume")
		var d=document.getElementById("portfolio")
		var e=document.getElementById("skill")
		var scrollvalue=window.scrollY
		console.log(scrollvalue)	
		if(scrollvalue<988){
			 b.setAttribute("class","p d-block");
			 c.setAttribute("class","p d-none");
			a.setAttribute("class","rex-1 ")
		}

		
		else if(scrollvalue>988 && scrollvalue<1200){
				 d.setAttribute("class","p d-none");
				 b.setAttribute("class","p d-none");
			c.setAttribute("class","p d-block");
					a.setAttribute("class","rex-2")
				}
			
		else if	(scrollvalue>1400){
				 d.setAttribute("class","p d-block");
				 c.setAttribute("class","p d-none");
			
			a.setAttribute("class","rex-3")
			}
		else if	(scrollvalue>1200){
		}
	
		}
		window.addEventListener("scroll",change)
			
		// home-sectiom

		function home(){
			console.log("guna")
			homes.classList.toggle("d-none")
		}
			let homes=document.getElementById("nav-home")	
			