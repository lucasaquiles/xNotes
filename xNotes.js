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
	
		
		
		div = "<div style='display:none;'>"+
				"<form>"+
					"<div><input type='radio' id='status' name='status' value='to-do'> to do</div>"+
					"<div><input type='radio' id='status' name='status' value='doing'> doing</div>"+
					"<div><input type='radio' id='status'name='status' value='done'> done</div>"+
					"<div><input type='submit' value='ok'>"+
				"</form>"+
			"</div>";
	
		priority = $('select#priority option:selected').text();
		tag = "<li class='to-do'>"+task+" - <span class='priority'>"+priority+"</span>"+div+"</li>";
		
		$("#compromissosList").append(tag);
		window.localStorage.setItem('compromissos', $("#compromissosList").html());
	}
	
	return false;
}
