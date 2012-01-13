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

function removeAll(){
	if(confirm("tem certeza que deseja apagar todas as tarefas/compromissos?")){
		window.localStorage.compromissos = [];
		location.reload(true);
	}
}

function addNote(task){
	
	if(localStorage.setItem('compromissos') != 'undefined'){
		
		$divElement = $("<div></div>");
		$divElement.attr({style:"display:none"});
		$divElement.addClass("container");
		
		$formElement = $("<form></form>");
		$formElement.attr({name:'formStatus', id:'formStatus', action:'#'});
		
		$formElement.append($('<input />').attr({name:'status',id:'status',type:'radio', value:'to-do'}).append('to-do'));
		$formElement.append($('<input />').attr({name:'status',id:'status',type:'radio', value:'doing'}).append('doing'));
		$formElement.append($('<input />').attr({name:'status',id:'status',type:'radio', value:'done'}).append('done'));

		$div = $("<div></div>");
		
		$div.append($('<input />').attr({name:'edit',id:'edit',type:'submit', value:'Ok'}))
			.append($('<input />').attr({name:'cancel',id:'cancel',type:'reset', value:'Cancelar'}));

		$formElement.append($div);
		
		$divElement.append($formElement);

		priority = $('select#priority option:selected').text();
		
		$spanElement = $("<span></span>").addClass('priority').addClass(priority);
		$spanElement.append(" - "+priority);
		
		
		$liElement = $("<li></li>").attr({class:'to-do'})
			.append(task.titulo)
			.append(" - "+task.data)
			.append($("<div></div>").append(task.descricao).addClass('descricao'))
			.append($spanElement)
			.append(removeItemButton())
			.append($divElement);
		$("#compromissosList").append($liElement);
		
		window.localStorage.setItem('compromissos', $("#compromissosList").html());
	}

	location.reload(true);
	
	return false;
}

function removeTask(){
	
	window.localStorage.setItem('compromissos', $("#compromissosList").html());
	location.reload(true);
}

function removeItemButton(){
	
	$removeButton = $("<a></a>");
	$removeButton.attr({
		href:"#"
	}).append("x").addClass('remove');
	
	return $removeButton;
}

