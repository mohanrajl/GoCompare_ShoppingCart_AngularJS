var app = angular.module('cartApp', []);
app.controller('cartCtrl', function($scope) {
    
	// Cart items
	$scope.cart = {
        items: [{			
				quantity: 0,
				description: 'A',
				offerAvailable: true,
				offerDetails: {
					offerPrice: 130,
					offerItems: 3
				},
				totalPrice: 0,
				price: 50},
			{
				quantity: 0,
				description: 'B',
				offerAvailable: true,
				offerDetails: {
					offerPrice: 45,
					offerItems: 2
				},
				totalPrice: 0,
				price: 30},
			{
				quantity: 0,
				description: 'C',
				offerAvailable: false,
				totalPrice: 0,
				price: 20},
			{
				quantity: 0,
				description: 'D',
				offerAvailable: false,
				totalPrice: 0,
				price: 15}]
    };

	// function to calculate item total price
	$scope.calculateItemTotalPrice = function(item) {		
        if (item.offerAvailable){
			item.totalPrice = (((item.quantity % item.offerDetails.offerItems) * item.price) + (parseInt(item.quantity / item.offerDetails.offerItems) * item.offerDetails.offerPrice));			
		}else{
			item.totalPrice = (item.quantity * item.price);
		}
    },
	
	// function to calculate total price
    $scope.calculateTotalPrice = function() {
        var totalPrice = 0;
        angular.forEach($scope.cart.items, function(item) {
            totalPrice += item.totalPrice;
        })

        return totalPrice;
    }
});