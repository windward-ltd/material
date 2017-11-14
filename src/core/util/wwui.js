/**
 * @ngdoc module
 * @name material.core.util
 * @description
 * WW UI Services. Wrappers for Angular Material services like $mdDialog, $mdToast...
 */
angular
  .module('material.core')
  .service('$mdWWUI', WWUIService);

/**
 * @ngInject
 */
function WWUIService($mdDialog, $mdToast) {

  var $mdWWUI = {
		/*
		options = {
			title: 'Modal title',
			text: 'Modal text',
			ok: 'OK button label'
		}
		*/
		showAlertDialog: function (options) {
			var alertDialogCfg = $mdDialog.alert()
				.title(options.title)
				.textContent(options.text)
				.ok(options.ok);

			return $mdDialog.show(alertDialogCfg);
		},

		/*
		options = {
			title: 'Modal title',
			text: 'Modal text',
			ok: 'OK button label',
			cancel: 'CANCEL button label'
		}
		*/
		showConfirmDialog: function (options) {
			var confirmDialogCfg = $mdDialog.confirm()
				.title(options.title)
				.textContent(options.text)
				.ok(options.ok)
				.cancel(options.cancel);

			return $mdDialog.show(confirmDialogCfg);
		},

		/*
		options = {
			title: 'Modal title',
			text: 'Modal text',
			inputPlaceholder: 'Placeholder of the input field',
			isInputRequred: true/false, (default - false)
			initialValue: initial value to put in the input field (defult - null)
			ok: 'OK button label',
			cancel: 'CANCEL button label'
		}
		*/
		showPromptDialog: function (options) {
			var promptDialogCfg = $mdDialog.prompt()
				.title(options.title)
				.textContent(options.text)
				.placeholder(options.inputPlaceholder)
				.required(options.isInputRequred || false)
				.initialValue(options.initialValue || null)
				.ok(options.ok)
				.cancel(options.cancel);

			return $mdDialog.show(promptDialogCfg);
		},


		/*
		options = {
			text: 'Toast text',
			position: (optional, default - 'bottom left'),
			hideDelay: (optional, default - 1200, in ms)
		}
		*/
		showSimpleToast: function (options) {
			var toastCfg = $mdToast.simple()
				.textContent(options.text)
				.position(options.position || 'bottom left')
				.hideDelay(options.hideDelay || 1200);

			return $mdToast.show(toastCfg);
		}
  };

  return $mdWWUI;
}
