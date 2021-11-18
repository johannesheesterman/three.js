import { UIPanel, UIRow, UIInput, UICheckbox, UIText, UISpan, UIButton } from './libs/ui.js';
import { Parameter } from './Parameter.js';


function SidebarParameters( editor ) {

	var config = editor.config;
	var container = new UISpan();
	if (!config.getKey('parameters')) { 
		config.setKey('parameters', [ new Parameter('Height') ]); 
	}

	for (let parameter of config.getKey('parameters')){

		renderParameter(container, parameter);
	}
	
	var actionsPanel = new UIPanel();
	actionsPanel.add(new UIButton('Add parameter'));
	container.add(actionsPanel);

	return container;
}

function renderParameter(container, parameter) {
	var panel = new UIPanel();

	var nameRow = new UIRow();
	var name = new UIInput( parameter.name ).setLeft( '100px' ).setWidth( '150px' )
	.onChange( function () {
		parameter.name = this.getValue();
	} );

	nameRow.add(new UIText('Name').setWidth( '90px' ));
	nameRow.add(name);
	panel.add(nameRow);

	container.add(panel);
}

export { SidebarParameters };

