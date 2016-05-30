define(['app', 'webApi'], function(app, webApi) {
	'use strict';

	angular
		.module('app')
		.controller('CategoryCtrl', dashboardCtrl);

	dashboardCtrl.$inject = ['webApi', 'categories'];

	function dashboardCtrl(webApi, categories) {
		console.log('CategoryCtrl');
		var self = this;

		this.editMode = false;

		// Make categories available in scope
		this.categories = categories;
		this.default = {
			// Product details
			parentCategory: null,
			title: null,
			description: null
		};
		this.category = this.default;

		// CRUD
		this.create = function() {
			webApi.request('POST', 'category/create', this.category)
				.then(function successCallback(res) {
					console.log(res);
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
			this.category = {
				parentCategory: null,
				title: null,
				description: null
			};
		};
		this.edit = function(id) {
			// Stop execution if no categories exist
			if (this.categories === null) {
				return;
			}
			// Locate category to edit
			for (var i = 0; i < this.categories.length; i++) {
				if (this.categories[i]._id === id) {
					this.editMode = this.categories[i]._id;
					this.category = this.categories[i];
				}
			}
		};
		this.update = function(category) {
			category['_id'] = this.editMode;
			this.editMode = false;
			webApi.request('POST', 'category/update', category)
				.then(function successCallback(res) {
					console.log(res);
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
			this.category = {
				parentCategory: null,
				title: null,
				description: null
			};
		};
		this.delete = function(id) {
			webApi.request('POST', 'category/delete', {
					_id: id
				})
				.then(function successCallback(res) {
					console.log(res);
				}, function errorCallback(res) {
					console.log(res);
				}).then(getAllCategories);
		};

		function getAllCategories() {
			webApi.request('POST', 'category/all')
				.then(function successCallback(res) {
					self.categories = res.data;
				}, function errorCallback(res) {

				});
		}
	}
});
