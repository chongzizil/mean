/**
 * Created by Zil on 6/16/14.
 */
angular.module('app').factory('meanToastr', function () {
	return toastr;
});

angular.module('app').factory('meanNotifier', function (meanToastr) {
	return {
		notify: function (msg) {
			console.log(msg);
			meanToastr.success(msg);
		},
		error: function (msg) {
			meanToastr.error(msg);
			console.log(msg);
		}
	}
});