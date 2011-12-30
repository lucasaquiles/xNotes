window.localStorage["prioridadeList"] = new Array('normal','baixa','urgente','alta');


function initComponents(){
	
	mountSelectPrioridades();
	mountCompromissos();
}

function mountCompromissos(){
		
	$("#compromissosList").html(localStorage.getItem('compromissos'));
}

function mountSelectPrioridades(){
	
	
	size = window.localStorage.getItem('prioridadeList').split(',').length;
	prioridades = window.localStorage.getItem('prioridadeList').split(',');
	
	for(i = 0; i < size; i++){
	    optionTag = "<option value='"+i+"'>"+prioridades[i]+"</option>";		    	
	    $('#priority').prepend(optionTag);
	   
	}
}

function addNote(task){
	
	if(localStorage.setItem('compromissos') != 'undefined'){
		priority = $('select#priority option:selected').text();
		tag = "<li class='to-do'>"+task+"- <span class='priority'>"+priority+"</span></li>";
		$("#compromissosList").append(tag);
		window.localStorage.setItem('compromissos', $("#compromissosList").html());
	}
	
	return false;
}
