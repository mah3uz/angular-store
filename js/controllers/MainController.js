app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'The Best Selling T-Shirt of the Month!';
	$scope.promo = 'The Collections of Best Selling T-Shirt';
	$scope.products = [{
		name: 'Fire Fighter',
		price: 19,
		pubdate: new Date('2014', '03', '08'),
		cover: 'img/ff.jpg',
		likes: 0,
        unlikes: 0
	},
	{
		name: 'Save Fuse',
		price: 8,
		pubdate: new Date('2013', '08', '01'),
		cover: 'img/sf.jpg',
		likes: 0,
        unlikes: 0
	},
	{
		name: 'Mission 22',
		price: 13,
		pubdate: new Date('1998', '04', '09'),
		cover: 'img/m22.jpg',
		likes: 0,
        unlikes: 0
	},
	{
		name: 'Hero Never Come Back',
		price: 56,
		pubdate: new Date('1867', '08', '22'),
		cover: 'img/hero.jpg',
		likes: 0,
        unlikes: 0
	}
	];
	
	$scope.plusOne = function(index) {
			$scope.products[index].likes += 1;
		};
    $scope.minusOne = function(index) {
        $scope.products[index].unlikes +=1;
    };
	
	}]);