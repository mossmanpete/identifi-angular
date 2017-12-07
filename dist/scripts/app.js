(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule']);

  angular.module('identifiAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('identifiAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('identifiAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('identifiAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsQ0FERjs7RUFLQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxTQUFBO1dBQ2xELFNBQUMsS0FBRDtBQUNFLFVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXJCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlc2NhcGUnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KVxuIF1cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VuY29kZVVSSUNvbXBvbmVudCcsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBpbnB1dFxuIF1cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnb3JkaW5hbCcsIC0+XG4gIChpbnB1dCkgLT5cbiAgICBzID0gW1xuICAgICAgJ3RoJ1xuICAgICAgJ3N0J1xuICAgICAgJ25kJ1xuICAgICAgJ3JkJ1xuICAgIF1cbiAgICB2ID0gaW5wdXQgJSAxMDBcbiAgICBpbnB1dCArIChzWyh2IC0gMjApICUgMTBdIG9yIHNbdl0gb3Igc1swXSlcbiJdfQ==

(function() {
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        id: '=',
        border: '=?',
        positiveScore: '=?',
        negativeScore: '=?',
        width: '=?'
      },
      link: function(scope, element, attr) {
        var update;
        update = function() {
          var bgColor, bgImage, boxShadow, transform;
          scope.negativeScore |= 0;
          scope.positiveScore |= 0;
          boxShadow = '0px 0px 0px 0px #82FF84';
          if (scope.positiveScore > scope.negativeScore * 20) {
            boxShadow = '0px 0px ' + scope.border * scope.positiveScore / 50 + 'px 0px #82FF84';
          } else if (scope.positiveScore < scope.negativeScore * 3) {
            boxShadow = '0px 0px ' + scope.border * scope.negativeScore / 10 + 'px 0px #BF0400';
          }
          bgColor = 'rgba(0,0,0,0.2)';
          bgImage = 'none';
          transform = '';
          if (scope.positiveScore + scope.negativeScore > 0) {
            if (scope.positiveScore > scope.negativeScore) {
              transform = 'rotate(' + ((-scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 - 180) / 2) + 'deg)';
              bgColor = '#A94442';
              bgImage = 'linear-gradient(' + scope.positiveScore / (scope.positiveScore + scope.negativeScore) * 360 + 'deg, transparent 50%, #3C763D 50%), linear-gradient(0deg, #3C763D 50%, transparent 50%)';
            } else {
              transform = 'rotate(' + ((-scope.negativeScore / (scope.positiveScore + scope.negativeScore) * 360 - 180) / 2) + 180 + 'deg)';
              bgColor = '#3C763D';
              bgImage = 'linear-gradient(' + scope.negativeScore / (scope.positiveScore + scope.negativeScore) * 360 + 'deg, transparent 50%, #A94442 50%), linear-gradient(0deg, #A94442 50%, transparent 50%)';
            }
          }
          element.children().css({
            width: scope.width + 'px',
            height: scope.width + 'px'
          });
          element.children().find('div').css({
            'background-color': bgColor,
            'background-image': bgImage,
            'width': scope.width + 'px',
            'box-shadow': boxShadow,
            'opacity': (scope.positiveScore + scope.negativeScore) / 10 * 0.5 + 0.35,
            'transform': transform
          });
          return element.find('img').css({
            'border-width': scope.border + 'px'
          });
        };
        return scope.$watchGroup(['positiveScore', 'negativeScore', 'id'], update);
      },
      template: "<div class=\"identicon\">\n  <div class=\"pie\">\n  </div>\n  <img alt=\"\"\n    width=\"{{width}}\"\n    src=\"https://www.gravatar.com/avatar/{{id.gravatar}}?d=retro&amp;s={{width*2}}\" />\n</div>"
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsV0FEYixFQUMwQixTQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsRUFBQSxFQUFJLEdBQUo7UUFDQSxNQUFBLEVBQVEsSUFEUjtRQUVBLGFBQUEsRUFBZSxJQUZmO1FBR0EsYUFBQSxFQUFlLElBSGY7UUFJQSxLQUFBLEVBQU8sSUFKUDtPQURGO01BTUEsSUFBQSxFQUFNLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsSUFBakI7QUFDSixZQUFBO1FBQUEsTUFBQSxHQUFTLFNBQUE7QUFDUCxjQUFBO1VBQUEsS0FBSyxDQUFDLGFBQU4sSUFBdUI7VUFDdkIsS0FBSyxDQUFDLGFBQU4sSUFBdUI7VUFDdkIsU0FBQSxHQUFZO1VBQ1osSUFBSSxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBTixHQUFzQixFQUFoRDtZQUNFLFNBQUEsR0FBWSxVQUFBLEdBQWEsS0FBSyxDQUFDLE1BQU4sR0FBZSxLQUFLLENBQUMsYUFBckIsR0FBcUMsRUFBbEQsR0FBdUQsaUJBRHJFO1dBQUEsTUFFSyxJQUFJLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUFOLEdBQXNCLENBQWhEO1lBQ0gsU0FBQSxHQUFZLFVBQUEsR0FBYSxLQUFLLENBQUMsTUFBTixHQUFlLEtBQUssQ0FBQyxhQUFyQixHQUFxQyxFQUFsRCxHQUF1RCxpQkFEaEU7O1VBR0wsT0FBQSxHQUFVO1VBQ1YsT0FBQSxHQUFVO1VBQ1YsU0FBQSxHQUFZO1VBQ1osSUFBRyxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBNUIsR0FBNEMsQ0FBL0M7WUFDRSxJQUFHLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUEvQjtjQUNFLFNBQUEsR0FBWSxTQUFBLEdBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQVAsR0FBdUIsQ0FBQyxLQUFLLENBQUMsYUFBTixHQUFzQixLQUFLLENBQUMsYUFBN0IsQ0FBdkIsR0FBcUUsR0FBckUsR0FBMkUsR0FBNUUsQ0FBQSxHQUFtRixDQUFwRixDQUFaLEdBQXFHO2NBQ2pILE9BQUEsR0FBVTtjQUNWLE9BQUEsR0FBVSxrQkFBQSxHQUFxQixLQUFLLENBQUMsYUFBTixHQUFzQixDQUFDLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUE3QixDQUF0QixHQUFvRSxHQUF6RixHQUErRiwwRkFIM0c7YUFBQSxNQUFBO2NBS0UsU0FBQSxHQUFZLFNBQUEsR0FBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsYUFBUCxHQUF1QixDQUFDLEtBQUssQ0FBQyxhQUFOLEdBQXNCLEtBQUssQ0FBQyxhQUE3QixDQUF2QixHQUFxRSxHQUFyRSxHQUEyRSxHQUE1RSxDQUFBLEdBQW1GLENBQXBGLENBQVosR0FBcUcsR0FBckcsR0FBMkc7Y0FDdkgsT0FBQSxHQUFVO2NBQ1YsT0FBQSxHQUFVLGtCQUFBLEdBQXFCLEtBQUssQ0FBQyxhQUFOLEdBQXNCLENBQUMsS0FBSyxDQUFDLGFBQU4sR0FBc0IsS0FBSyxDQUFDLGFBQTdCLENBQXRCLEdBQW9FLEdBQXpGLEdBQStGLDBGQVAzRzthQURGOztVQVVBLE9BQU8sQ0FBQyxRQUFSLENBQUEsQ0FBa0IsQ0FBQyxHQUFuQixDQUNFO1lBQUEsS0FBQSxFQUFPLEtBQUssQ0FBQyxLQUFOLEdBQWMsSUFBckI7WUFDQSxNQUFBLEVBQVEsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUR0QjtXQURGO1VBR0EsT0FBTyxDQUFDLFFBQVIsQ0FBQSxDQUFrQixDQUFDLElBQW5CLENBQXdCLEtBQXhCLENBQThCLENBQUMsR0FBL0IsQ0FDRTtZQUFBLGtCQUFBLEVBQW9CLE9BQXBCO1lBQ0Esa0JBQUEsRUFBb0IsT0FEcEI7WUFFQSxPQUFBLEVBQVMsS0FBSyxDQUFDLEtBQU4sR0FBYyxJQUZ2QjtZQUdBLFlBQUEsRUFBYyxTQUhkO1lBSUEsU0FBQSxFQUFZLENBQUMsS0FBSyxDQUFDLGFBQU4sR0FBc0IsS0FBSyxDQUFDLGFBQTdCLENBQUEsR0FBOEMsRUFBOUMsR0FBbUQsR0FBbkQsR0FBeUQsSUFKckU7WUFLQSxXQUFBLEVBQWEsU0FMYjtXQURGO2lCQU9BLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFtQixDQUFDLEdBQXBCLENBQ0U7WUFBQSxjQUFBLEVBQWdCLEtBQUssQ0FBQyxNQUFOLEdBQWUsSUFBL0I7V0FERjtRQWhDTztlQWtDVCxLQUFLLENBQUMsV0FBTixDQUFrQixDQUFDLGVBQUQsRUFBa0IsZUFBbEIsRUFBbUMsSUFBbkMsQ0FBbEIsRUFBNEQsTUFBNUQ7TUFuQ0ksQ0FOTjtNQTBDQSxRQUFBLEVBQVUsd01BMUNWOztFQURzQixDQUQxQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAnaWRlbnRpY29uJywgLT5cbiAgICBzY29wZTpcbiAgICAgIGlkOiAnPSdcbiAgICAgIGJvcmRlcjogJz0/J1xuICAgICAgcG9zaXRpdmVTY29yZTogJz0/J1xuICAgICAgbmVnYXRpdmVTY29yZTogJz0/J1xuICAgICAgd2lkdGg6ICc9PydcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHIpIC0+XG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBzY29wZS5uZWdhdGl2ZVNjb3JlIHw9IDBcbiAgICAgICAgc2NvcGUucG9zaXRpdmVTY29yZSB8PSAwXG4gICAgICAgIGJveFNoYWRvdyA9ICcwcHggMHB4IDBweCAwcHggIzgyRkY4NCdcbiAgICAgICAgaWYgKHNjb3BlLnBvc2l0aXZlU2NvcmUgPiBzY29wZS5uZWdhdGl2ZVNjb3JlICogMjApXG4gICAgICAgICAgYm94U2hhZG93ID0gJzBweCAwcHggJyArIHNjb3BlLmJvcmRlciAqIHNjb3BlLnBvc2l0aXZlU2NvcmUgLyA1MCArICdweCAwcHggIzgyRkY4NCdcbiAgICAgICAgZWxzZSBpZiAoc2NvcGUucG9zaXRpdmVTY29yZSA8IHNjb3BlLm5lZ2F0aXZlU2NvcmUgKiAzKVxuICAgICAgICAgIGJveFNoYWRvdyA9ICcwcHggMHB4ICcgKyBzY29wZS5ib3JkZXIgKiBzY29wZS5uZWdhdGl2ZVNjb3JlIC8gMTAgKyAncHggMHB4ICNCRjA0MDAnXG5cbiAgICAgICAgYmdDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMiknXG4gICAgICAgIGJnSW1hZ2UgPSAnbm9uZSdcbiAgICAgICAgdHJhbnNmb3JtID0gJydcbiAgICAgICAgaWYgc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUgPiAwXG4gICAgICAgICAgaWYgc2NvcGUucG9zaXRpdmVTY29yZSA+IHNjb3BlLm5lZ2F0aXZlU2NvcmVcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICgoLXNjb3BlLnBvc2l0aXZlU2NvcmUgLyAoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpICogMzYwIC0gMTgwKSAvIDIpICsgJ2RlZyknXG4gICAgICAgICAgICBiZ0NvbG9yID0gJyNBOTQ0NDInXG4gICAgICAgICAgICBiZ0ltYWdlID0gJ2xpbmVhci1ncmFkaWVudCgnICsgc2NvcGUucG9zaXRpdmVTY29yZSAvIChzY29wZS5wb3NpdGl2ZVNjb3JlICsgc2NvcGUubmVnYXRpdmVTY29yZSkgKiAzNjAgKyAnZGVnLCB0cmFuc3BhcmVudCA1MCUsICMzQzc2M0QgNTAlKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICMzQzc2M0QgNTAlLCB0cmFuc3BhcmVudCA1MCUpJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9ICdyb3RhdGUoJyArICgoLXNjb3BlLm5lZ2F0aXZlU2NvcmUgLyAoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpICogMzYwIC0gMTgwKSAvIDIpICsgMTgwICsgJ2RlZyknXG4gICAgICAgICAgICBiZ0NvbG9yID0gJyMzQzc2M0QnXG4gICAgICAgICAgICBiZ0ltYWdlID0gJ2xpbmVhci1ncmFkaWVudCgnICsgc2NvcGUubmVnYXRpdmVTY29yZSAvIChzY29wZS5wb3NpdGl2ZVNjb3JlICsgc2NvcGUubmVnYXRpdmVTY29yZSkgKiAzNjAgKyAnZGVnLCB0cmFuc3BhcmVudCA1MCUsICNBOTQ0NDIgNTAlKSwgbGluZWFyLWdyYWRpZW50KDBkZWcsICNBOTQ0NDIgNTAlLCB0cmFuc3BhcmVudCA1MCUpJ1xuXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4oKS5jc3MgIyAuaWRlbnRpY29uXG4gICAgICAgICAgd2lkdGg6IHNjb3BlLndpZHRoICsgJ3B4J1xuICAgICAgICAgIGhlaWdodDogc2NvcGUud2lkdGggKyAncHgnXG4gICAgICAgIGVsZW1lbnQuY2hpbGRyZW4oKS5maW5kKCdkaXYnKS5jc3MgIyAucGllXG4gICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBiZ0NvbG9yXG4gICAgICAgICAgJ2JhY2tncm91bmQtaW1hZ2UnOiBiZ0ltYWdlXG4gICAgICAgICAgJ3dpZHRoJzogc2NvcGUud2lkdGggKyAncHgnXG4gICAgICAgICAgJ2JveC1zaGFkb3cnOiBib3hTaGFkb3dcbiAgICAgICAgICAnb3BhY2l0eSc6ICgoc2NvcGUucG9zaXRpdmVTY29yZSArIHNjb3BlLm5lZ2F0aXZlU2NvcmUpIC8gMTAgKiAwLjUgKyAwLjM1KVxuICAgICAgICAgICd0cmFuc2Zvcm0nOiB0cmFuc2Zvcm1cbiAgICAgICAgZWxlbWVudC5maW5kKCdpbWcnKS5jc3NcbiAgICAgICAgICAnYm9yZGVyLXdpZHRoJzogc2NvcGUuYm9yZGVyICsgJ3B4J1xuICAgICAgc2NvcGUuJHdhdGNoR3JvdXAgWydwb3NpdGl2ZVNjb3JlJywgJ25lZ2F0aXZlU2NvcmUnLCAnaWQnXSwgdXBkYXRlXG4gICAgdGVtcGxhdGU6IFwiXCJcIlxuICAgICAgPGRpdiBjbGFzcz1cImlkZW50aWNvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGllXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW1nIGFsdD1cIlwiXG4gICAgICAgICAgd2lkdGg9XCJ7e3dpZHRofX1cIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmdyYXZhdGFyLmNvbS9hdmF0YXIve3tpZC5ncmF2YXRhcn19P2Q9cmV0cm8mYW1wO3M9e3t3aWR0aCoyfX1cIiAvPlxuICAgICAgPC9kaXY+XG4gICAgXCJcIlwiXG4iXX0=

(function() {
  angular.module('identifiAngular').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxjQURiLEVBQzZCLFNBQUE7QUFFekIsUUFBQTtJQUFBLGtCQUFBLEdBQXFCLFNBQUMsSUFBRCxFQUFPLGlCQUFQO01BQ25CO0FBQUEsVUFBQTtNQUNBLEVBQUEsR0FBSztNQUVMLFFBQUEsR0FBVyxTQUFBO2VBQ1QsZUFBQSxDQUFBLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsU0FBQTtVQUNyQixJQUFJLENBQUMsSUFBTCxDQUFVLDZCQUFWO1FBRHFCLENBQXZCO01BRFM7TUFLWCxlQUFBLEdBQWtCLFNBQUE7ZUFDaEIsaUJBQWlCLENBQUMsZUFBbEIsQ0FBa0MsRUFBbEMsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxTQUFDLElBQUQ7VUFDekMsRUFBRSxDQUFDLFlBQUgsR0FBa0I7aUJBQ2xCLEVBQUUsQ0FBQztRQUZzQyxDQUEzQztNQURnQjtNQUtsQixFQUFFLENBQUMsWUFBSCxHQUFrQjtNQUNsQixRQUFBLENBQUE7SUFmbUI7SUFrQnJCLFFBQUEsR0FBVyxTQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksSUFBWixFQUFrQixFQUFsQjtBQUNULFVBQUE7TUFBQSxPQUFBLEdBQVU7TUFDVixNQUFBLEdBQVMsUUFBQSxDQUFTLEVBQUcsQ0FBQSxDQUFBLENBQVosRUFDUDtRQUFBLFNBQUEsRUFBVyxFQUFYO1FBQ0EsV0FBQSxFQUFhLEVBRGI7UUFFQSxVQUFBLEVBQVksR0FGWjtRQUdBLElBQUEsRUFBTSxJQUhOO1FBSUEsT0FBQSxFQUFTLEdBSlQ7T0FETztNQU1ULEVBQUUsQ0FBQyxRQUFILENBQVksZUFBWjtNQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxXQUF0QixFQUFtQyxTQUFDLEtBQUQ7UUFDakMsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQUMsS0FBbkIsQ0FBQSxDQUEwQixFQUFDLE1BQUQsRUFBMUIsQ0FBQTtNQURpQyxDQUFuQztNQUdBLE9BQUEsR0FBVSxLQUFLLENBQUMsTUFBTixDQUFhLGlCQUFiLEVBQWdDLFNBQUE7UUFDeEMsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLFlBQW5CLEVBQWlDLFNBQUMsV0FBRDtVQUMvQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVcsQ0FBQyxLQUF4QixDQUE4QixDQUFDLEtBQS9CLENBQUEsQ0FBc0MsRUFBQyxNQUFELEVBQXRDLENBQUE7UUFEK0IsQ0FBakM7TUFEd0MsQ0FBaEM7TUFNVixLQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsU0FBQTtRQUNwQixPQUFBLENBQUE7TUFEb0IsQ0FBdEI7SUFsQlM7V0F1QlgsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxLQUFBLEVBQU87UUFBQSxXQUFBLEVBQWEsR0FBYjtPQURQO01BRUEsUUFBQSxFQUFVLFFBRlY7TUFHQSxJQUFBLEVBQU0sUUFITjtNQUlBLFVBQUEsRUFBWSxrQkFKWjtNQUtBLFlBQUEsRUFBYyxJQUxkOztFQTVDdUIsQ0FEN0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      msgData: '=',
      pageInfo: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxHQUFUO01BQ0EsUUFBQSxFQUFVLElBRFY7S0FERjtJQUdBLFdBQUEsRUFBYSw4Q0FIYjtHQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

(function() {
  angular.module('identifiAngular').factory('Messages', [
    '$resource', '$location', function($resource, $location) {
      var host, path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsT0FBbEMsQ0FBMEMsVUFBMUMsRUFBc0Q7SUFDcEQsV0FEb0QsRUFFcEQsV0FGb0QsRUFHcEQsU0FBQyxTQUFELEVBQVksU0FBWjtBQUNFLFVBQUE7TUFBQSxJQUFBLEdBQU8sU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNQLElBQUEsR0FBVSxJQUFJLENBQUMsS0FBTCxDQUFXLGFBQVgsQ0FBSCxHQUFpQyxvQkFBakMsR0FBMkQ7YUFDbEUsU0FBQSxDQUFVLElBQUEsR0FBTyxrQkFBakI7SUFIRixDQUhvRDtHQUF0RDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBNZXNzYWdlcyBzZXJ2aWNlIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBNZXNzYWdlcyBSRVNUIGVuZHBvaW50c1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZhY3RvcnkgJ01lc3NhZ2VzJywgW1xuICAnJHJlc291cmNlJ1xuICAnJGxvY2F0aW9uJ1xuICAoJHJlc291cmNlLCAkbG9jYXRpb24pIC0+XG4gICAgcGF0aCA9ICRsb2NhdGlvbi5hYnNVcmwoKVxuICAgIGhvc3QgPSBpZiBwYXRoLm1hdGNoIC9cXC9pcFtuZl1zXFwvLyB0aGVuICdodHRwczovL2lkZW50aS5maS8nIGVsc2UgJydcbiAgICAkcmVzb3VyY2UgaG9zdCArICdhcGkvbWVzc2FnZXMvOmlkJ1xuXVxuIl19

(function() {
  'use strict';
  var hasProp = {}.hasOwnProperty;

  angular.module('identifiAngular').controller('MessagesController', [
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', 'localStorageService', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs, prop, value;
        msgs = localStorageService.get('localMessages') || {};
        return $scope.msgs = {
          loading: false,
          finished: false,
          list: (function() {
            var results;
            results = [];
            for (prop in msgs) {
              if (!hasProp.call(msgs, prop)) continue;
              value = msgs[prop];
              results.push(value);
            }
            return results;
          })()
        };
      };
      $scope.resetMsgs();
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1, Math.abs(rating)));
      };
      $scope.iconStyle = function(rating) {
        var iconStyle;
        iconStyle = 'neutral';
        if (rating > 0) {
          iconStyle = 'positive';
        } else if (rating < 0) {
          iconStyle = 'negative';
        }
        return iconStyle;
      };
      $scope.iconClass = function(rating) {
        var iconStyle;
        iconStyle = 'glyphicon-question-sign';
        if (rating > 0) {
          iconStyle = 'glyphicon-thumbs-up';
        } else if (rating < 0) {
          iconStyle = 'glyphicon-thumbs-down';
        }
        return iconStyle;
      };
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.find = function() {
        var p, searchKey;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs = $scope.msgs || [];
        $scope.msgs.loading = true;
        searchKey = '';
        if ($scope.msgs.list.length) {
          searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        p = $scope.messageIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var i, len, localMessages, messages, pair, v;
          messages = [];
          localMessages = localStorageService.get('localMessages') || {};
          for (i = 0, len = res.length; i < len; i++) {
            pair = res[i];
            if (pair.value) {
              v = pair.value;
              v.searchKey = pair.key;
              if (localMessages.hasOwnProperty(v.hash)) {
                delete localMessages[v.hash];
                localStorageService.set('localMessages', localMessages);
              } else {
                messages.push(v);
              }
            }
          }
          return messages;
        });
        return p.then(function(messages) {
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list, messages);
          if (messages.length < $scope.filters.limit - 1) {
            $scope.$apply(function() {
              return $scope.msgs.finished = true;
            });
          }
          return $scope.$apply(function() {
            return $scope.msgs.loading = false;
          });
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        var getMessageFromApi, hash, processResponse, query;
        if ($stateParams.id) {
          processResponse = function() {
            $scope.processMessages([$scope.message], {}, true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail || $scope.message.data.author[0][1]).toString();
            $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail || $scope.message.data.recipient[0][1]).toString();
            $scope.message.hash = hash;
            return $scope.getIdentityProfile({
              type: 'keyID',
              value: $scope.message.signer_keyid
            }, function(profile) {
              return $scope.$apply(function() {
                return $scope.message.verifiedBy = profile;
              });
            });
          };
          getMessageFromApi = function() {
            return $scope.message = Messages.get({
              id: hash,
              viewpoint_name: $scope.filters.viewpoint_name,
              viewpoint_value: $scope.filters.viewpoint_value,
              max_distance: $scope.filters.max_distance
            }, processResponse);
          };
          hash = $stateParams.id;
          query = null;
          return $scope.$watch('apiReady', function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = {
                    'jws': res
                  };
                  return processResponse();
                })["catch"](function(err) {
                  console.log('failed to get msg from ipfs', err);
                  return getMessageFromApi();
                });
              } else {
                return getMessageFromApi();
              }
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLG9CQUE3QyxFQUFtRTtJQUNqRSxRQURpRSxFQUVqRSxZQUZpRSxFQUdqRSxTQUhpRSxFQUlqRSxjQUppRSxFQUtqRSxXQUxpRSxFQU1qRSxPQU5pRSxFQVFqRSxVQVJpRSxFQVNqRSxRQVRpRSxFQVVqRSxVQVZpRSxFQVdqRSxxQkFYaUUsRUFZakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRixFQUEwRixtQkFBMUY7TUFDRSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUV0QixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU8sbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztlQUNuRCxNQUFNLENBQUMsSUFBUCxHQUNFO1VBQUEsT0FBQSxFQUFTLEtBQVQ7VUFDQSxRQUFBLEVBQVUsS0FEVjtVQUVBLElBQUE7O0FBQU87aUJBQUEsWUFBQTs7OzJCQUFBO0FBQUE7O2NBRlA7O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJ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QUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO2NBQS9CLENBQWQ7WUFEK0UsQ0FBakY7VUFQZ0I7VUFVbEIsaUJBQUEsR0FBb0IsU0FBQTttQkFDbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBUSxDQUFDLEdBQVQsQ0FDZjtjQUFBLEVBQUEsRUFBSSxJQUFKO2NBQ0EsY0FBQSxFQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBRC9CO2NBRUEsZUFBQSxFQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLGVBRmhDO2NBR0EsWUFBQSxFQUFjLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFIN0I7YUFEZSxFQUtmLGVBTGU7VUFEQztVQVFwQixJQUFBLEdBQU8sWUFBWSxDQUFDO1VBQ3BCLEtBQUEsR0FBUTtpQkFDUixNQUFNLENBQUMsTUFBUCxDQUFjLFVBQWQsRUFBMEIsU0FBQyxPQUFEO1lBQ3hCLElBQUcsT0FBSDtjQUNFLElBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyx3QkFBWCxDQUFIO3VCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFvQixDQUFDLElBQXJCLENBQTBCLFNBQUMsR0FBRDtrQkFDeEIsTUFBTSxDQUFDLE9BQVAsR0FBaUI7b0JBQUUsS0FBQSxFQUFPLEdBQVQ7O3lCQUNqQixlQUFBLENBQUE7Z0JBRndCLENBQTFCLENBR0EsRUFBQyxLQUFELEVBSEEsQ0FHTyxTQUFDLEdBQUQ7a0JBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxHQUEzQzt5QkFDQSxpQkFBQSxDQUFBO2dCQUZLLENBSFAsRUFERjtlQUFBLE1BQUE7dUJBUUUsaUJBQUEsQ0FBQSxFQVJGO2VBREY7O1VBRHdCLENBQTFCLEVBckJGOztNQURlO0lBdEVuQixDQVppRTtHQUFuRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ01lc3NhZ2VzJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5yZXNldE1zZ3MgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6ICh2YWx1ZSBmb3Igb3duIHByb3AsIHZhbHVlIG9mIG1zZ3MpXG4gICAgJHNjb3BlLnJlc2V0TXNncygpXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuZmluZCA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3MubG9hZGluZ1xuICAgICAgJHNjb3BlLm1zZ3MgPSAkc2NvcGUubXNncyB8fCBbXVxuICAgICAgJHNjb3BlLm1zZ3MubG9hZGluZyA9IHRydWVcbiAgICAgICMgR2V0IGxhdGVzdCBtZXNzYWdlcyBmcm9tIGlwZnMgaW5kZXhcbiAgICAgIHNlYXJjaEtleSA9ICcnXG4gICAgICBpZiAkc2NvcGUubXNncy5saXN0Lmxlbmd0aFxuICAgICAgICBzZWFyY2hLZXkgPSAkc2NvcGUubXNncy5saXN0WyRzY29wZS5tc2dzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICBwID0gJHNjb3BlLm1lc3NhZ2VJbmRleC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKVxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbWVzc2FnZXMgPSBbXVxuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgICAgICBmb3IgcGFpciBpbiByZXNcbiAgICAgICAgICBpZiBwYWlyLnZhbHVlXG4gICAgICAgICAgICB2ID0gcGFpci52YWx1ZVxuICAgICAgICAgICAgdi5zZWFyY2hLZXkgPSBwYWlyLmtleVxuICAgICAgICAgICAgaWYgbG9jYWxNZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2Lmhhc2gpXG4gICAgICAgICAgICAgIGRlbGV0ZSBsb2NhbE1lc3NhZ2VzW3YuaGFzaF1cbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCBsb2NhbE1lc3NhZ2VzKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHYpXG4gICAgICAgIHJldHVybiBtZXNzYWdlc1xuICAgICAgcC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBtZXNzYWdlc1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUubXNncy5saXN0LCBtZXNzYWdlcylcbiAgICAgICAgaWYgbWVzc2FnZXMubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxICMgYnVnXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5sb2FkaW5nID0gZmFsc2VcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnJlc2V0TXNncygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgIyBGaW5kIGV4aXN0aW5nIE1lc3NhZ2VcbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICBpZiAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlID0gLT5cbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFskc2NvcGUubWVzc2FnZV0sIHt9LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJ01lc3NhZ2UgJyArIGhhc2hcbiAgICAgICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSgkc2NvcGUubWVzc2FnZSlcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5hdXRob3JHcmF2YXRhciA9IENyeXB0b0pTLk1ENSgkc2NvcGUubWVzc2FnZS5hdXRob3JFbWFpbCBvciAkc2NvcGUubWVzc2FnZS5kYXRhLmF1dGhvclswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudEdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KCRzY29wZS5tZXNzYWdlLnJlY2lwaWVudEVtYWlsIG9yICRzY29wZS5tZXNzYWdlLmRhdGEucmVjaXBpZW50WzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuaGFzaCA9IGhhc2hcbiAgICAgICAgICAkc2NvcGUuZ2V0SWRlbnRpdHlQcm9maWxlIHsgdHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZCB9LCAocHJvZmlsZSkgLT5cbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9IHByb2ZpbGVcblxuICAgICAgICBnZXRNZXNzYWdlRnJvbUFwaSA9IC0+XG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBNZXNzYWdlcy5nZXRcbiAgICAgICAgICAgIGlkOiBoYXNoXG4gICAgICAgICAgICB2aWV3cG9pbnRfbmFtZTogJHNjb3BlLmZpbHRlcnMudmlld3BvaW50X25hbWVcbiAgICAgICAgICAgIHZpZXdwb2ludF92YWx1ZTogJHNjb3BlLmZpbHRlcnMudmlld3BvaW50X3ZhbHVlXG4gICAgICAgICAgICBtYXhfZGlzdGFuY2U6ICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICAgICwgcHJvY2Vzc1Jlc3BvbnNlXG5cbiAgICAgICAgaGFzaCA9ICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBxdWVyeSA9IG51bGxcbiAgICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGhhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IHsgJ2p3cyc6IHJlcyB9ICMgc2FtZSBmb3JtYXQgYXMgdGhlIG9iamVjdCByZXR1cm5lZCBieSBNZXNzYWdlcy5nZXRcbiAgICAgICAgICAgICAgICBwcm9jZXNzUmVzcG9uc2UoKVxuICAgICAgICAgICAgICAuY2F0Y2ggKGVycikgLT4gIyBmYWxsYmFjayBnbyBsb2NhbCBpZiBpcGZzIG5vdCBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyAnZmFpbGVkIHRvIGdldCBtc2cgZnJvbSBpcGZzJywgZXJyXG4gICAgICAgICAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkoKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBnZXRNZXNzYWdlRnJvbUFwaSgpXG5cbiAgICByZXR1cm5cbl1cbiJdfQ==

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config, localStorageService) {
      var addLocalMessages, messagesAdded;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.info = {};
      $scope.stats = {};
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      $scope.distance = null;
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newAttribute = {
        type: '',
        value: $stateParams.value
      };
      $scope.filters.type = null;
      $scope.collapseLevel = {};
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.slider = {
        value: 0,
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true
        }
      };
      messagesAdded = false;
      $scope.$on('MessageAdded', function(event, args) {
        var ref;
        $scope.localMessages[args.message.hash] = args.message;
        $scope.localMessages[args.message.hash].local = true;
        localStorageService.set('localMessages', $scope.localMessages);
        messagesAdded = true;
        if (!$state.is('identities.show')) {
          return;
        }
        if (((ref = args.message.signedData.type) === 'verify_identity' || ref === 'unverify_identity') && !args.id.confirmed) {
          return $scope.getConnections();
        } else if (args.message.signedData.type === 'rating') {
          if (messagesAdded) {
            $scope.received.shift();
          }
          $scope.processMessages([args.message]);
          return $scope.received.unshift(args.message);
        }
      });
      $scope.addEntry = function(event, entry) {
        var params, recipient;
        recipient = [];
        if (entry.name) {
          recipient.push(['name', entry.name]);
        }
        if (entry.email) {
          recipient.push(['email', entry.email]);
        }
        if (entry.url) {
          recipient.push(['url', entry.url]);
        }
        if (entry.phone) {
          recipient.push(['phone', entry.phone]);
        }
        params = {
          type: 'verify_identity',
          recipient: recipient
        };
        return $scope.createMessage(event, params).then(function(response) {
          return $state.go('messages.show', {
            id: response.ipfs_hash
          });
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.getConnections = function() {
        var alpha, c, conn, connections, has, hash, i, idKey, j, k, key, len, len1, mostConfirmations, msg, percentage, r, ref, ref1, ref2, ref3, ref4, v;
        $scope.connections = {};
        connections = $scope.identityProfile.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.conf;
          $scope.stats = {
            received_positive: c.pos,
            received_negative: c.neg,
            received_neutral: c.neut
          };
          $scope.distance = c.dist;
        } else {
          mostConfirmations = 1;
        }
        for (k in connections) {
          v = connections[k];
          $scope.connections[$scope.getIdKey(v)] = Object.assign({}, v);
        }
        ref = $scope.localMessages;
        for (hash in ref) {
          msg = ref[hash];
          msg.data = msg.data || msg.signedData;
          if ((ref1 = msg.data.type) === 'verify_identity' || ref1 === 'unverify_identity') {
            has = false;
            ref2 = msg.data.recipient;
            for (i = 0, len = ref2.length; i < len; i++) {
              r = ref2[i];
              if (r[0] === $scope.idType && r[1] === $scope.idValue) {
                has = true;
                break;
              }
            }
            if (!has) {
              continue;
            }
            ref3 = msg.data.recipient;
            for (j = 0, len1 = ref3.length; j < len1; j++) {
              r = ref3[j];
              if (!(r[0] === $scope.idType && r[1] === $scope.idValue)) {
                idKey = $scope.getIdKey(r);
                if ($scope.connections.hasOwnProperty(idKey)) {
                  if (msg.data.type === 'verify_identity') {
                    $scope.connections[idKey].conf += 1;
                  }
                  if (msg.data.type === 'unverify_identity') {
                    $scope.connections[idKey].ref += 1;
                  }
                } else {
                  $scope.connections[idKey] = {
                    name: msg.data.recipient[1][0],
                    val: msg.data.recipient[1][1],
                    conf: msg.data.type === 'verify_identity' ? 1 : 0,
                    ref: msg.data.type === 'unverify_identity' ? 1 : 0
                  };
                }
                break;
              }
            }
          }
        }
        ref4 = $scope.connections;
        for (key in ref4) {
          conn = ref4[key];
          conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
          switch (conn.name) {
            case 'email':
              conn.iconStyle = 'glyphicon glyphicon-envelope';
              conn.btnStyle = 'btn-success';
              conn.link = 'mailto:' + conn.val;
              conn.quickContact = true;
              $scope.info.email = $scope.info.email || conn.val;
              break;
            case 'bitcoin_address':
            case 'bitcoin':
              conn.iconStyle = 'fa fa-bitcoin';
              conn.btnStyle = 'btn-primary';
              conn.link = 'https://blockchain.info/address/' + conn.val;
              conn.quickContact = true;
              break;
            case 'gpg_fingerprint':
            case 'gpg_keyid':
              conn.iconStyle = 'fa fa-key';
              conn.btnStyle = 'btn-default';
              conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.val;
              break;
            case 'account':
              conn.iconStyle = 'fa fa-at';
              break;
            case 'nickname':
              $scope.info.nickname = $scope.info.nickname || conn.val;
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'name':
              $scope.info.name = $scope.info.name || conn.val;
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'tel':
            case 'phone':
              conn.iconStyle = 'glyphicon glyphicon-earphone';
              conn.btnStyle = 'btn-success';
              conn.link = 'tel:' + conn.val;
              conn.quickContact = true;
              break;
            case 'keyID':
              conn.iconStyle = 'fa fa-key';
              break;
            case 'coverPhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.coverPhoto = $scope.coverPhoto || {
                  'background-image': 'url(' + ($scope.ipfsStorage.apiRoot || '') + conn.val + ')'
                };
              }
              break;
            case 'profilePhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.profilePhoto = $scope.profilePhoto || ($scope.ipfsStorage.apiRoot || '') + conn.val;
              }
              break;
            case 'url':
              conn.link = conn.val;
              if (conn.val.indexOf('facebook.com/') > -1) {
                conn.iconStyle = 'fa fa-facebook';
                conn.btnStyle = 'btn-facebook';
                conn.link = conn.val;
                conn.linkName = conn.val.split('facebook.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('twitter.com/') > -1) {
                conn.iconStyle = 'fa fa-twitter';
                conn.btnStyle = 'btn-twitter';
                conn.link = conn.val;
                conn.linkName = conn.val.split('twitter.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('plus.google.com/') > -1) {
                conn.iconStyle = 'fa fa-google-plus';
                conn.btnStyle = 'btn-google-plus';
                conn.link = conn.val;
                conn.linkName = conn.val.split('plus.google.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('linkedin.com/') > -1) {
                conn.iconStyle = 'fa fa-linkedin';
                conn.btnStyle = 'btn-linkedin';
                conn.link = conn.val;
                conn.linkName = conn.val.split('linkedin.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('github.com/') > -1) {
                conn.iconStyle = 'fa fa-github';
                conn.btnStyle = 'btn-github';
                conn.link = conn.val;
                conn.linkName = conn.val.split('github.com/')[1];
                conn.quickContact = true;
              } else {
                conn.iconStyle = 'glyphicon glyphicon-link';
                conn.btnStyle = 'btn-default';
              }
          }
          if (conn.val && conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
            conn.link = ($scope.ipfsStorage.apiRoot || '') + conn.val;
            conn.linkName = conn.val;
            conn.iconStyle = 'glyphicon glyphicon-link';
            conn.btnStyle = 'btn-default';
          }
          if (conn.conf + conn.ref > 0) {
            percentage = conn.conf * 100 / (conn.conf + conn.ref);
            if (percentage >= 80) {
              alpha = conn.conf / mostConfirmations * 0.7 + 0.3;
            } else if (percentage >= 60) {
              conn.rowClass = 'warning';
            } else {
              conn.rowClass = 'danger';
            }
          }
          $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
        }
        $scope.getPhotosFromGravatar();
        $scope.connectionsLength = Object.keys($scope.connections).length;
        return $scope.setPageTitle($scope.info.name || $scope.info.nickname || $scope.idValue);
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('', 10000, false, true).then(function(res) {
                res.forEach(function(row) {
                  var msg, ref;
                  msg = row.value;
                  if (!msg.signedData) {
                    msg.signedData = KJUR.jws.JWS.parse(msg.jws).payloadObj;
                  }
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'unverify_identity')) {
                    msg.gravatar = CryptoJS.MD5(msg.authorEmail || msg.signedData.author[0][1]).toString();
                    msg.linkToAuthor = msg.signedData.author[0];
                    return $scope.verifications.push(msg);
                  }
                });
                return resolve();
              });
            } else {
              return resolve();
            }
          } else {
            return resolve();
          }
        });
        return getVerifications.then(function() {
          var msgs;
          msgs = [];
          $scope.verifications.forEach(function(msg) {
            var hasId1, hasId2, i, id, len, ref;
            hasId1 = hasId2 = false;
            ref = msg.signedData.recipient;
            for (i = 0, len = ref.length; i < len; i++) {
              id = ref[i];
              if (id[0] === id2.name && id[1] === id2.val) {
                return msgs.push(msg);
              }
            }
          });
          return msgs;
        });
      };
      $scope.connectionClicked = function(event, id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var searchKey;
        if ($scope.sent.loading) {
          return;
        }
        $scope.sent.loading = true;
        searchKey = '';
        if ($scope.sent.length) {
          searchKey = $scope.sent[$scope.sent.length - 1].searchKey;
        }
        return $scope.sentIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var msgs;
          msgs = [];
          res.forEach(function(row) {
            var v;
            v = row.value;
            v.searchKey = row.key;
            return msgs.push(v);
          });
          return msgs;
        }).then(function(sent) {
          $scope.processMessages(sent, {
            recipientIsSelf: false
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent, sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        })["catch"](function(error) {
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var searchKey;
        if ($scope.received.loading) {
          return;
        }
        $scope.received.loading = true;
        searchKey = '';
        if ($scope.received.length) {
          searchKey = $scope.received[$scope.received.length - 1].searchKey;
        }
        return $scope.receivedIndex.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var msgs;
          msgs = [];
          res.forEach(function(row) {
            var v;
            v = row.value;
            v.searchKey = row.key;
            return msgs.push(v);
          });
          return msgs;
        }).then(function(received) {
          $scope.processMessages(received, {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var sorted;
            Array.prototype.push.apply($scope.received, received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            sorted = received.sort(function(a, b) {
              if (a.distance > b.distance) {
                return 1;
              }
              if (a.distance < b.distance) {
                return -1;
              }
              return 0;
            });
            return sorted.forEach(function(msg) {
              var neutralRating;
              if ($scope.thumbsUp.length >= 12 && $scope.thumbsDown.length >= 12) {
                return;
              }
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if ($scope.thumbsUp.length < 12 && msg.data.rating > neutralRating) {
                return $scope.thumbsUp.push(msg);
              } else if ($scope.thumbsDown.length < 12 && msg.rating < neutralRating) {
                return $scope.thumbsDown.push(msg);
              }
            });
          });
        })["catch"](function(error) {
          return $scope.received.finished = true;
        });
      };
      $scope.getPhotosFromGravatar = function() {
        var email;
        console.log($scope.idValue);
        email = $scope.info.email || $scope.idValue;
        return $scope.gravatar = CryptoJS.MD5(email).toString();
      };
      addLocalMessages = function() {
        var connectionsToAdd, hash, msg, msgs, results;
        msgs = localStorageService.get('localMessages') || {};
        connectionsToAdd = {};
        results = [];
        for (hash in msgs) {
          msg = msgs[hash];
          msg.data = msg.data || msg.signedData;
          if (msg.data.recipient[0][0] === $scope.idType && msg.data.recipient[0][1] === $scope.idValue) {
            $scope.received.unshift(msg);
          }
          if (msg.data.author[0][0] === $scope.idType && msg.data.author[0][1] === $scope.idValue) {
            results.push($scope.sent.unshift(msg));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.sent = [];
        $scope.received = [];
        addLocalMessages();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list', {
            search: $scope.idValue
          });
          $scope.tabs[2].active = true;
        }
        $scope.setPageTitle($scope.idValue);
        $scope.$watch('apiReady', function(isReady) {
          if (isReady) {
            return $scope.getIdentityProfile({
              type: $scope.idType,
              value: $scope.idValue
            }).then(function(profile) {
              $scope.identityProfile = profile;
              $scope.$apply(function() {
                return addLocalMessages();
              });
              $scope.getConnections();
              if (profile.sent) {
                $window.merkleBtree.MerkleBTree.getByHash(profile.sent, $scope.ipfsStorage).then(function(sentIndex) {
                  $scope.sentIndex = sentIndex;
                  return $scope.getSentMsgs(0);
                });
              }
              if (profile.received) {
                return $window.merkleBtree.MerkleBTree.getByHash(profile.received, $scope.ipfsStorage).then(function(receivedIndex) {
                  $scope.receivedIndex = receivedIndex;
                  return $scope.getReceivedMsgs(0);
                });
              }
            })["catch"](function(err) {
              return console.log('error fetching profile', err);
            });
          }
        });
        if ($scope.idType === 'keyID' && $scope.idValue === $scope.nodeInfo.keyID) {
          return $scope.distance = 0;
        }
      };
      if ($state.is('identities.show')) {
        return $scope.findOne();
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFDZixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFDckIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFq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QyxRQUFYO3VCQUNFLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQWhDLENBQTBDLE9BQU8sQ0FBQyxRQUFsRCxFQUE0RCxNQUFNLENBQUMsV0FBbkUsQ0FDQSxDQUFDLElBREQsQ0FDTSxTQUFDLGFBQUQ7a0JBQ0osTUFBTSxDQUFDLGFBQVAsR0FBdUI7eUJBQ3ZCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQXZCO2dCQUZJLENBRE4sRUFERjs7WUFUNkUsQ0FBL0UsQ0FjQSxFQUFDLEtBQUQsRUFkQSxDQWNPLFNBQUMsR0FBRDtxQkFDTCxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLEdBQXRDO1lBREssQ0FkUCxFQURGOztRQUR3QixDQUExQjtRQWtCQSxJQUFHLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE9BQWpCLElBQTZCLE1BQU0sQ0FBQyxPQUFQLEtBQWtCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBbEU7aUJBQ0UsTUFBTSxDQUFDLFFBQVAsR0FBa0IsRUFEcEI7O01BOUJlO01BaUNqQixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtlQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7SUFoVkYsQ0FibUU7R0FBckU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLmluZm8gPSB7fVxuICAgICRzY29wZS5zdGF0cyA9IHt9XG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLmRpc3RhbmNlID0gbnVsbFxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld0F0dHJpYnV0ZSA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIHZhbHVlOiAwXG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgIG1lc3NhZ2VzQWRkZWQgPSBmYWxzZVxuICAgICRzY29wZS4kb24gJ01lc3NhZ2VBZGRlZCcsIChldmVudCwgYXJncykgLT5cbiAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXSA9IGFyZ3MubWVzc2FnZVxuICAgICAgJHNjb3BlLmxvY2FsTWVzc2FnZXNbYXJncy5tZXNzYWdlLmhhc2hdLmxvY2FsID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcbiAgICAgIG1lc3NhZ2VzQWRkZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddIGFuZCBub3QgYXJncy5pZC5jb25maXJtZWRcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgIGVsc2UgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBpZiBtZXNzYWdlc0FkZGVkXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnNoaWZ0KClcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbYXJncy5tZXNzYWdlXVxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQudW5zaGlmdCBhcmdzLm1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICByZWNpcGllbnQgPSBbXVxuICAgICAgaWYgZW50cnkubmFtZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ25hbWUnLCBlbnRyeS5uYW1lXVxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydlbWFpbCcsIGVudHJ5LmVtYWlsXVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnRcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ21lc3NhZ2VzLnNob3cnLCB7IGlkOiByZXNwb25zZS5pcGZzX2hhc2ggfVxuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW9ucyA9IC0+XG4gICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSB7fVxuICAgICAgY29ubmVjdGlvbnMgPSAkc2NvcGUuaWRlbnRpdHlQcm9maWxlLmF0dHJzIG9yIFtdXG4gICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgIGMgPSBjb25uZWN0aW9uc1swXVxuICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZlxuICAgICAgICAkc2NvcGUuc3RhdHMgPVxuICAgICAgICAgIHJlY2VpdmVkX3Bvc2l0aXZlOiBjLnBvc1xuICAgICAgICAgIHJlY2VpdmVkX25lZ2F0aXZlOiBjLm5lZ1xuICAgICAgICAgIHJlY2VpdmVkX25ldXRyYWw6IGMubmV1dFxuICAgICAgICAkc2NvcGUuZGlzdGFuY2UgPSBjLmRpc3RcbiAgICAgIGVsc2VcbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICBmb3IgaywgdiBvZiBjb25uZWN0aW9uc1xuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbJHNjb3BlLmdldElkS2V5KHYpXSA9IE9iamVjdC5hc3NpZ24oe30sIHYpXG4gICAgICBmb3IgaGFzaCwgbXNnIG9mICRzY29wZS5sb2NhbE1lc3NhZ2VzXG4gICAgICAgIG1zZy5kYXRhID0gbXNnLmRhdGEgb3IgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgaWYgbXNnLmRhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgaGFzID0gZmFsc2VcbiAgICAgICAgICBmb3IgciBpbiBtc2cuZGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIGlmIHJbMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgclsxXcKgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgICAgaGFzID0gdHJ1ZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBoYXNcbiAgICAgICAgICBmb3IgciBpbiBtc2cuZGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHVubGVzcyByWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIHJbMV3CoD09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICAgIGlkS2V5ID0gJHNjb3BlLmdldElkS2V5KHIpXG4gICAgICAgICAgICAgIGlmICRzY29wZS5jb25uZWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZEtleSlcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldLmNvbmYgKz0gMSBpZiBtc2cuZGF0YS50eXBlID09ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XS5yZWYgKz0gMSBpZiBtc2cuZGF0YS50eXBlID09ICd1bnZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0gPVxuICAgICAgICAgICAgICAgICAgbmFtZTogbXNnLmRhdGEucmVjaXBpZW50WzFdWzBdXG4gICAgICAgICAgICAgICAgICB2YWw6IG1zZy5kYXRhLnJlY2lwaWVudFsxXVsxXVxuICAgICAgICAgICAgICAgICAgY29uZjogaWYgbXNnLmRhdGEudHlwZSA9PSAndmVyaWZ5X2lkZW50aXR5JyB0aGVuIDEgZWxzZSAwXG4gICAgICAgICAgICAgICAgICByZWY6IGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3VudmVyaWZ5X2lkZW50aXR5JyB0aGVuIDEgZWxzZSAwXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICBmb3Iga2V5LCBjb25uIG9mICRzY29wZS5jb25uZWN0aW9uc1xuICAgICAgICBjb25uLmlzQ3VycmVudCA9IGNvbm4ubmFtZSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBjb25uLnZhbCA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdtYWlsdG86JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pbmZvLmVtYWlsID0gJHNjb3BlLmluZm8uZW1haWwgb3IgY29ubi52YWxcbiAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdncGdfZmluZ2VycHJpbnQnLCAnZ3BnX2tleWlkJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL3BncC5taXQuZWR1L3Brcy9sb29rdXA/b3A9Z2V0JnNlYXJjaD0weCcgKyBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICRzY29wZS5pbmZvLm5pY2tuYW1lID0gJHNjb3BlLmluZm8ubmlja25hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgJHNjb3BlLmluZm8ubmFtZSA9ICRzY29wZS5pbmZvLm5hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICd0ZWw6JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsICsgJyknIH1cbiAgICAgICAgICB3aGVuICdwcm9maWxlUGhvdG8nXG4gICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZmlsZVBob3RvID0gJHNjb3BlLnByb2ZpbGVQaG90byBvciAoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3Qgb3IgJycpICsgY29ubi52YWxcbiAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgaWYgY29ubi52YWwuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLnZhbCBhbmQgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICBjb25uLmxpbmsgPSAoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3Qgb3IgJycpICsgY29ubi52YWxcbiAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWxcbiAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi5jb25mICsgY29ubi5yZWYgPiAwXG4gICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICBhbHBoYSA9IGNvbm4uY29uZiAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBjb25uLnF1aWNrQ29udGFjdFxuICAgICAgJHNjb3BlLmdldFBob3Rvc0Zyb21HcmF2YXRhcigpXG4gICAgICAkc2NvcGUuY29ubmVjdGlvbnNMZW5ndGggPSBPYmplY3Qua2V5cygkc2NvcGUuY29ubmVjdGlvbnMpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAoJHNjb3BlLmluZm8ubmFtZSB8fCAkc2NvcGUuaW5mby5uaWNrbmFtZSB8fCAkc2NvcGUuaWRWYWx1ZSlcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyA9IChpZDEsIGlkMikgLT5cbiAgICAgIGdldFZlcmlmaWNhdGlvbnMgPSAkcSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaWYgISRzY29wZS52ZXJpZmljYXRpb25zLmxlbmd0aFxuICAgICAgICAgIGlmICRzY29wZS5yZWNlaXZlZEluZGV4XG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAxMDAwMCwgZmFsc2UsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICAgICAgICBtc2cgPSByb3cudmFsdWVcbiAgICAgICAgICAgICAgICB1bmxlc3MgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgICAgICAgICAgIG1zZy5zaWduZWREYXRhID0gS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpLnBheWxvYWRPYmpcbiAgICAgICAgICAgICAgICBpZiAobXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddKVxuICAgICAgICAgICAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JFbWFpbCBvciBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLnB1c2ggbXNnXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkWzBdwqA9PSBpZDIubmFtZSBhbmQgaWRbMV0gPT0gaWQyLnZhbFxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5zZW50LmxvYWRpbmdcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLnNlbnQubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgJHNjb3BlLnNlbnRJbmRleC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgIHYgPSByb3cudmFsdWVcbiAgICAgICAgICB2LnNlYXJjaEtleSA9IHJvdy5rZXlcbiAgICAgICAgICBtc2dzLnB1c2ggdlxuICAgICAgICByZXR1cm4gbXNnc1xuICAgICAgLnRoZW4gKHNlbnQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgc2VudCwgeyByZWNpcGllbnRJc1NlbGY6IGZhbHNlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5zZW50LCBzZW50KVxuICAgICAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHNlbnQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmdcbiAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5yZWNlaXZlZC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgdiA9IHJvdy52YWx1ZVxuICAgICAgICAgIHYuc2VhcmNoS2V5ID0gcm93LmtleVxuICAgICAgICAgIG1zZ3MucHVzaCB2XG4gICAgICAgIHJldHVybiBtc2dzXG4gICAgICAudGhlbiAocmVjZWl2ZWQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgcmVjZWl2ZWQsIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5yZWNlaXZlZCwgcmVjZWl2ZWQpXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHJlY2VpdmVkLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAgIHNvcnRlZCA9IHJlY2VpdmVkLnNvcnQgKGEsYikgLT5cbiAgICAgICAgICAgIHJldHVybiAxIGlmIGEuZGlzdGFuY2UgPiBiLmRpc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gLTEgaWYgYS5kaXN0YW5jZSA8IGIuZGlzdGFuY2VcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgc29ydGVkLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoID49IDEyIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPj0gMTJcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLmRhdGEubWF4UmF0aW5nICsgbXNnLmRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICAgIGlmICRzY29wZS50aHVtYnNVcC5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzVXAucHVzaCBtc2dcbiAgICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kICBtc2cucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFBob3Rvc0Zyb21HcmF2YXRhciA9IC0+XG4gICAgICBjb25zb2xlLmxvZyAkc2NvcGUuaWRWYWx1ZVxuICAgICAgZW1haWwgPSAkc2NvcGUuaW5mby5lbWFpbCBvciAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KGVtYWlsKS50b1N0cmluZygpXG5cbiAgICBhZGRMb2NhbE1lc3NhZ2VzID0gLT5cbiAgICAgIG1zZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpIG9yIHt9XG4gICAgICBjb25uZWN0aW9uc1RvQWRkID0ge31cbiAgICAgIGZvciBoYXNoLCBtc2cgb2YgbXNnc1xuICAgICAgICBtc2cuZGF0YSA9IG1zZy5kYXRhIG9yIG1zZy5zaWduZWREYXRhXG4gICAgICAgIGlmIG1zZy5kYXRhLnJlY2lwaWVudFswXVswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbMF1bMV0gPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQudW5zaGlmdChtc2cpXG4gICAgICAgIGlmIG1zZy5kYXRhLmF1dGhvclswXVswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBtc2cuZGF0YS5hdXRob3JbMF1bMV0gPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAkc2NvcGUuc2VudC51bnNoaWZ0KG1zZylcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAgIGFkZExvY2FsTWVzc2FnZXMoKVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgICRzY29wZS5pc0N1cnJlbnRVc2VyID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uIGFuZFxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciBhbmRcbiAgICAgICAgJHNjb3BlLmlkVHlwZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgYW5kXG4gICAgICAgICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICRzY29wZS5pc1VuaXF1ZVR5cGUgPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZigkc2NvcGUuaWRUeXBlKSA+IC0xXG4gICAgICBpZiAhJHNjb3BlLmlzVW5pcXVlVHlwZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCcsIHsgc2VhcmNoOiAkc2NvcGUuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS50YWJzWzJdLmFjdGl2ZSA9IHRydWVcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS4kd2F0Y2ggJ2FwaVJlYWR5JywgKGlzUmVhZHkpIC0+XG4gICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAkc2NvcGUuZ2V0SWRlbnRpdHlQcm9maWxlKHsgdHlwZTogJHNjb3BlLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5pZFZhbHVlIH0pLnRoZW4gKHByb2ZpbGUpIC0+XG4gICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHlQcm9maWxlID0gcHJvZmlsZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBhZGRMb2NhbE1lc3NhZ2VzKClcbiAgICAgICAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICAgICAgICBpZiBwcm9maWxlLnNlbnRcbiAgICAgICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2gocHJvZmlsZS5zZW50LCAkc2NvcGUuaXBmc1N0b3JhZ2UpXG4gICAgICAgICAgICAgIC50aGVuIChzZW50SW5kZXgpIC0+XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbnRJbmRleCA9IHNlbnRJbmRleFxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRTZW50TXNncygwKVxuICAgICAgICAgICAgaWYgcHJvZmlsZS5yZWNlaXZlZFxuICAgICAgICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChwcm9maWxlLnJlY2VpdmVkLCAkc2NvcGUuaXBmc1N0b3JhZ2UpXG4gICAgICAgICAgICAgIC50aGVuIChyZWNlaXZlZEluZGV4KSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4ID0gcmVjZWl2ZWRJbmRleFxuICAgICAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoMClcbiAgICAgICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBmZXRjaGluZyBwcm9maWxlJywgZXJyXG4gICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICdrZXlJRCcgYW5kICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5ub2RlSW5mby5rZXlJRFxuICAgICAgICAkc2NvcGUuZGlzdGFuY2UgPSAwXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maW5kT25lKClcbl1cbiJdfQ==

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q) {

      /*
      Persona.watch
        loggedInUser: Authentication.user.email
        onlogin: (assertion) ->
          $http.post('/auth/persona', assertion: assertion).then ->
            location.reload()
             * FIXME
                          onlogout: ->
       */
      var jws, previousState, previousStateParams, privateKey, scrollTo, token;
      $scope.authentication = {};
      $scope.localMessages = localStorageService.get('localMessages') || {};
      localStorageService.set('localMessages', $scope.localMessages);
      $scope.nodeInfo = {
        keyID: null
      };
      $scope.ipfsStorage = {};
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.loginWithKey = function(privateKeyPEM) {
        var publicKeyHash, publicKeyHex;
        $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM);
        $scope.publicKey = new KJUR.crypto.ECDSA({
          'curve': 'secp256k1',
          'pub': $scope.privateKey.pubKeyHex
        });
        localStorageService.set('privateKeyPEM', privateKeyPEM);
        publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
        publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: publicKeyHash
        };
        if ($scope.loginModal) {
          return $scope.loginModal.close();
        }
      };
      privateKey = localStorageService.get('privateKeyPEM');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      }
      token = $location.search().token;
      if (token) {
        jws = KJUR.jws.JWS.parse(token).payloadObj;
        $scope.authentication.token = token;
        $scope.authentication.user = jws.user;
        localStorageService.set('token', token);
        previousState = localStorageService.get('state') || 'identities.list';
        previousStateParams = localStorageService.get('stateParams') || {};
        $state.go(previousState, previousStateParams);
      } else {
        token = localStorageService.get('token');
        if (token) {
          jws = KJUR.jws.JWS.parse(token).payloadObj;
          $scope.authentication.token = token;
          $scope.authentication.user = jws.user;
        }
      }
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        EXPERIMENTAL: {
          pubsub: true
        },
        start: true,
        repo: 'ipfs-testing',
        config: {
          Bootstrap: ['/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd', '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx', '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3', '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z', '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM', '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu', '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm', '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64']
        }
      });
      $http.get('/api', {
        timeout: 2000
      }).then(function(res) {
        return $scope.nodeInfo = angular.extend($scope.nodeInfo, res.data);
      }, function(err) {
        return $scope.nodeInfo = {
          loginOptions: [true],
          keyID: null
        };
      });
      $scope.ipfs.on('ready', function() {
        console.log($scope.ipfs);
        $window.ipfs = $scope.ipfs;
        return $scope.ipfs.pubsub.subscribe('identifi', function(msg) {
          var hash, localMessages;
          msg = {
            jws: $scope.ipfs.types.Buffer(msg.data).toString()
          };
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(msg.jws));
          console.log('identifi message received', msg, hash);
          localMessages = localStorageService.get('localMessages');
          $scope.processMessages([msg]);
          localMessages[hash] = msg;
          return localStorageService.set('localMessages', localMessages);
        });
      });
      $scope.initIpfsIndexes = function() {
        var indexRoot;
        indexRoot = '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs';
        console.log('Loading index from https://identi.fi:', indexRoot);
        $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://identi.fi');
        $q.all([$window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage)])["catch"](function(e) {
          console.log('Loading index from https://identi.fi failed', e);
          console.log('Loading index from ipfs.io');
          $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage('https://ipfs.io');
          return $q.all([$window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_distance', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/identities_by_searchkey', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(indexRoot + '/messages_by_timestamp', $scope.ipfsStorage)]);
        }).then(function(results) {
          console.log('Got index', results);
          $scope.identitiesByDistance = results[0];
          $scope.identitiesBySearchKey = results[1];
          $scope.messageIndex = results[2];
          return $scope.apiReady = true;
        });
        return $http.get('https://identi.fi' + indexRoot + '/info')["catch"](function(err) {
          return $http.get('https://ipfs.io' + indexRoot + '/info');
        }).then(function(res) {
          return $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID]);
        })["catch"](function(e) {
          return console.log('initialization failed:', e);
        });
      };
      $scope.initIpfsIndexes();
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri, getJson) {
        var jsIpfsGet;
        jsIpfsGet = function() {
          console.log('Getting from js-ipfs', uri);
          return $scope.ipfs.files.cat(uri).then(function(stream) {
            return new Promise(function(resolve, reject) {
              stream.on('data', function(file) {
                file = $scope.ipfs.types.Buffer(file).toString();
                if (getJson) {
                  file = JSON.parse(file);
                }
                return resolve(file);
              });
              return stream.on('error', function(error) {
                return reject(error);
              });
            });
          });
        };
        if ($scope.ipfsStorage.apiRoot) {
          return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + uri).then(function(res) {
            return res.data;
          })["catch"](function() {
            return jsIpfsGet();
          });
        } else {
          return jsIpfsGet();
        }
      };
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.createMessage = function(event, params, id) {
        var hash, header, message, options, payload, publicKeyHash, publicKeyHex;
        if (event) {
          event.stopPropagation();
        }
        message = {
          context: 'identifi'
        };
        if (params.type === 'rating') {
          angular.extend(message, {
            maxRating: 3,
            minRating: -3
          });
        }
        angular.extend(message, params);
        options = {};
        if ($scope.privateKey) {
          publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
          publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
          message.author = [['keyID', publicKeyHash]];
          message.timestamp = new Date().toISOString();
          header = JSON.stringify({
            alg: 'ES256',
            kid: publicKeyHex
          });
          payload = JSON.stringify(message);
          jws = KJUR.jws.JWS.sign("ES256", header, payload, $scope.privateKey);
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(jws));
          message = {
            jws: jws,
            hash: hash
          };
          $scope.ipfs.files.add(new $scope.ipfs.types.Buffer(jws)).then(function(i) {
            return $scope.ipfs.pubsub.publish('identifi', new $scope.ipfs.types.Buffer(jws));
          });
        } else {
          options = {
            headers: {
              'Authorization': 'Bearer ' + $scope.authentication.token
            }
          };
        }
        return $http.post('/api/messages', message, options)["catch"](function() {
          return $http.post('https://identi.fi/api/messages', message, options);
        }).then((function(response) {
          console.log(response);
          $scope.newMessage.comment = '';
          $scope.newMessage.rating = 1;
          $scope.newVerification.type = '';
          $scope.newVerification.value = '';
          $scope.$root.$broadcast('MessageAdded', {
            message: response.data,
            id: id
          });
          if (response.data.ipfsIndexRoot) {
            $scope.getIpfsIndexes($scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot);
          }
          return response.data;
        }), function(errorResponse) {
          $scope.error = errorResponse.data || JSON.stringify(errorResponse);
          return console.error(errorResponse);
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1;
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return $scope.loginModal.close();
        });
      };
      $scope.generateKey = function() {
        var keypair;
        keypair = KEYUTIL.generateKeypair('EC', 'secp256k1');
        $scope.privateKey = keypair.prvKeyObj;
        $scope.publicKey = keypair.pubKeyObj;
        return $scope.privateKeyPEM = KEYUTIL.getPEM($scope.privateKey, 'PKCS8PRV');
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeyPEM);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeyPEM = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        return $scope.publicKey = null;
      };
      $scope.msgFilter = function(value, index, array) {
        var data, neutralRating;
        data = value.data || value.signedData;
        if ($scope.filters.type) {
          if ($scope.filters.type.match(/^rating/)) {
            if (data.type !== 'rating') {
              return false;
            }
            neutralRating = (data.maxRating + data.minRating) / 2;
            if ($scope.filters.type === 'rating:positive' && data.rating <= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:negative' && data.rating >= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:neutral' && data.rating !== neutralRating) {
              return false;
            }
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        }
        if ($scope.filters.max_distance) {
          if ($scope.filters.max_distance === 0 && typeof value.distance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.distance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.logoClicked = function() {
        if ($state.is('identities.list')) {
          if ($scope.query.term !== '') {
            $scope.query.term = '';
            return $scope.search();
          }
        } else {
          $scope.query.term = '';
          $scope.ids.list = [];
          $scope.ids.finished = false;
          return $state.go('identities.list');
        }
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.data,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData, void 0, 2);
      };
      $scope.profileFromData = function(data, fallbackId) {
        var k, ref, v;
        if (data.attrs && data.attrs.length) {
          data.dist = data.attrs[0].dist + 0;
          data.pos = data.attrs[0].pos;
          data.neg = data.attrs[0].neg;
          ref = data.attrs;
          for (k in ref) {
            v = ref[k];
            switch (v.name) {
              case 'name':
                if (!data.name) {
                  data.name = v.val;
                }
                break;
              case 'nickname':
                if (!data.nickname) {
                  data.nickname = v.val;
                }
                break;
              case 'email':
                data.gravatar = CryptoJS.MD5(v.val).toString();
            }
          }
        }
        if (data.nickname && !data.name) {
          data.name = data.nickname;
        }
        if (!data.name) {
          data.name = fallbackId.value;
        }
        if (!data.gravatar) {
          data.gravatar = CryptoJS.MD5(fallbackId.value).toString();
        }
        return data;
      };
      $scope.getIdentityProfile = function(id, callback) {
        return $scope.identitiesBySearchKey.searchText(encodeURIComponent(id.value) + ':' + encodeURIComponent(id.type), 1).then(function(res) {
          if (res.length) {
            return $scope.ipfsGet(res[0].value, true).then(function(res) {
              return {
                data: res
              };
            });
          } else {
            return {
              data: {}
            };
          }
        }).then(function(res) {
          var profile;
          profile = $scope.profileFromData(res.data, id);
          if (callback) {
            return callback(profile);
          } else {
            return profile;
          }
        });
      };
      $scope.openMessage = function(event, message, size) {
        var modalInstance, t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        if (!$scope.hasValidSignature(message)) {
          return;
        }
        $scope.getIdentityProfile({
          type: 'keyID',
          value: $scope.message.signer_keyid
        }, function(profile) {
          return $scope.$apply(function() {
            return $scope.message.verifiedBy = profile;
          });
        });
        modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        modalInstance.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return modalInstance.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;

      /*
      $scope.authentication = Authentication
      if Authentication.user
        if Authentication.user.provider == 'persona'
          Authentication.user.idType = 'email'
        else
          Authentication.user.idType = 'url'
        switch Authentication.user.provider
          when 'persona'
            Authentication.user.idValue = Authentication.user.email
          when 'twitter'
            Authentication.user.idValue = 'https://twitter.com/' + Authentication.user.username
          else
            Authentication.user.idValue = Authentication.user.providerData.link
            break
       */
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.hasValidSignature = function(msg, parsedJws) {
        var isValid, pem, pubKey;
        parsedJws = parsedJws || KJUR.jws.JWS.parse(msg.jws);
        pem = KJUR.asn1.ASN1Util.getPEMStringFromHex(parsedJws.headerObj.kid, "PUBLIC KEY");
        pubKey = KEYUTIL.getKey(pem);
        isValid = KJUR.jws.JWS.verify(msg.jws, pubKey, ['ES256']);
        if (isValid) {
          console.log('valid signature');
        } else {
          console.error('invalid signature');
        }
        return isValid;
      };
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var alpha, i, index, keyHash, maxRatingDiff, minRatingDiff, neutralRating, parsedJws, rating, ref, ref1, signedData, smallestIndex;
          parsedJws = KJUR.jws.JWS.parse(msg.jws);
          msg.data = parsedJws.payloadObj;
          if (!msg.signer_keyid) {
            keyHash = CryptoJS.SHA256(parsedJws.headerObj.kid);
            msg.signer_keyid = CryptoJS.enc.Base64.stringify(keyHash);
          }
          if (verifySignature && !$scope.hasValidSignature(msg, parsedJws)) {
            return;
          }
          msg.gravatar = CryptoJS.MD5(msg.author_email || msg.data.author[0][1]).toString();
          msg.linkToAuthor = msg.data.author[0];
          i = void 0;
          i = 0;
          smallestIndex = 1000;
          while (i < msg.data.author.length) {
            index = config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]);
            if (index > -1 && index < smallestIndex) {
              smallestIndex = index;
              msg.linkToAuthor = msg.data.author[i];
            } else if (!msg.author_name && ((ref = msg.data.author[i][0]) === 'name' || ref === 'nickname')) {
              msg.author_name = msg.data.author[i][1];
            }
            i++;
          }
          msg.linkToRecipient = msg.data.recipient[0];
          i = 0;
          smallestIndex = 1000;
          while (i < msg.data.recipient.length) {
            index = config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]);
            if (index > -1 && index < smallestIndex) {
              smallestIndex = index;
              msg.linkToRecipient = msg.data.recipient[i];
            } else if (!msg.recipient_name && ((ref1 = msg.data.recipient[i][0]) === 'name' || ref1 === 'nickname')) {
              msg.recipient_name = msg.data.recipient[i][1];
            }
            i++;
          }
          signedData = msg.data;
          alpha = void 0;
          msg.iconStyle = '';
          msg.hasSuccess = '';
          msg.bgColor = '';
          msg.iconCount = new Array(1);
          switch (signedData.type) {
            case 'verify_identity':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'connection':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'unverify_identity':
              msg.iconStyle = 'glyphicon glyphicon-remove negative';
              msg.hasSuccess = 'has-error';
              return msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
            case 'rating':
              rating = signedData.rating;
              neutralRating = (signedData.minRating + signedData.maxRating) / 2;
              maxRatingDiff = signedData.maxRating - neutralRating;
              minRatingDiff = signedData.minRating - neutralRating;
              if (rating > neutralRating) {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
                alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2;
                return msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');';
              } else if (rating < neutralRating) {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative';
                msg.iconCount = minRatingDiff > -2 ? msg.iconCount : new Array(Math.ceil(3 * rating / minRatingDiff));
                alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2;
                return msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');';
              } else {
                msg.bgColor = 'background-color: #fcf8e3;';
                return msg.iconStyle = 'glyphicon glyphicon-question-sign neutral';
              }
          }
        };
        return angular.forEach(messages, function(msg, key) {
          var k, v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          if (msg.ipfs_hash && !msg.jws) {
            return $scope.ipfsGet(msg.ipfs_hash).then(function(res) {
              msg.jws = res;
              return processMessage(msg);
            });
          } else {
            return processMessage(msg);
          }
        });
      };
      $scope.$on('$stateChangeSuccess', function() {
        return $scope.isCollapsed = false;
      });
      scrollTo = function(el) {
        var pos;
        if (!el) {
          return;
        }
        pos = el.getBoundingClientRect();
        if (pos.top) {
          if (pos.top - 60 < $window.pageYOffset) {
            $window.scrollTo(0, pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0, pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.searchRequest = null;
      $scope.search = function(query, limit) {
        var cursor, searchKey;
        $scope.ids.loading = true;
        $scope.identitiesByHash = {};
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
          $scope.identitiesByHash = {};
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 50;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].searchKey;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identitiesBySearchKey.searchText(searchKey, limit, cursor);
        } else {
          $scope.searchRequest = $scope.identitiesByDistance.searchText(searchKey, limit, cursor);
        }
        $scope.searchRequest = $scope.searchRequest.then(function(identities) {
          var queries;
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) {
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          queries = [];
          angular.forEach(identities, function(row) {
            var p;
            if (!(row.value && row.value.length && !$scope.identitiesByHash[row.value])) {
              return;
            }
            $scope.identitiesByHash[row.value] = true;
            searchKey = row.key;
            p = $scope.ipfsGet(row.value, true).then(function(row) {
              var identity, smallestIndex;
              identity = {
                searchKey: searchKey
              };
              smallestIndex = 1000;
              angular.forEach(row.attrs, function(attr) {
                var dist, index;
                dist = parseInt(attr.dist);
                if (!isNaN(dist) && (identity.distance === void 0 || ((0 <= dist && dist < identity.distance)))) {
                  identity.distance = dist;
                }
                if (identity.pos === void 0 && parseInt(attr.pos) > 0) {
                  identity.pos = attr.pos;
                }
                if (identity.neg === void 0 && parseInt(attr.neg) > 0) {
                  identity.neg = attr.neg;
                }
                switch (attr.name) {
                  case 'email':
                    identity.email = attr.val;
                    identity.gravatar = CryptoJS.MD5(attr.val).toString();
                    break;
                  case 'name':
                    identity.name = attr.val;
                    break;
                  case 'nickname':
                    identity.nickname = attr.val;
                    if (!identity.name) {
                      identity.name = attr.val;
                    }
                    break;
                  case 'bitcoin':
                  case 'bitcoin_address':
                    identity.bitcoin = attr.val;
                    break;
                  case 'url':
                    if (attr.val.indexOf('twitter.com/') > -1) {
                      identity.twitter = attr.val.split('twitter.com/')[1];
                    }
                    if (attr.val.indexOf('facebook.com/') > -1) {
                      identity.facebook = attr.val.split('facebook.com/')[1];
                    }
                    if (attr.val.indexOf('plus.google.com/') > -1) {
                      identity.googlePlus = attr.val.split('plus.google.com/')[1];
                    }
                }
                index = config.uniqueAttributeTypes.indexOf(attr.name);
                if (!identity.linkTo) {
                  identity.linkTo = {
                    type: attr.name,
                    value: attr.val
                  };
                }
                if (index > -1 && index < smallestIndex) {
                  identity.linkTo = {
                    type: attr.name,
                    value: attr.val
                  };
                  smallestIndex = index;
                }
                if (!identity.gravatar) {
                  return identity.gravatar = CryptoJS.MD5(attr.val).toString();
                }
              });
              if (!identity.name) {
                identity.name = row.attrs[0].val;
              }
              $scope.ids.list.push(identity);
              return $scope.ids.list[0].active = true;
            });
            return queries.push(p);
          });
          if (identities.length > 0) {
            $scope.ids.activeKey = 0;
          }
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          return $q.all(queries);
        });
        return $scope.searchRequest.then(function() {
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
      };
      $scope.searchKeydown = function(event) {
        var el, id, wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > 0) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey - 1].active = true;
              $scope.ids.activeKey--;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            id = $scope.ids.list[$scope.ids.activeKey];
            return $state.go('identities.show', {
              type: id.linkTo.type,
              value: id.linkTo.value
            });
          case -1:
            clearTimeout($scope.timer);
            $scope.query.term = '';
            return $scope.search();
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 39:
            break;
          default:
            el = angular.element(event.currentTarget);
            clearTimeout($scope.timer);
            wait = setTimeout((function() {
              $scope.query.term = el.val();
              $scope.search();
            }), 300);
            $scope.timer = wait;
            break;
        }
      };
      return $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show', {
          type: item.linkTo.type,
          value: item.linkTo.value
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFlN0QsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUNBLG1CQURBLEVBQ3FCLFNBRHJCLEVBQ2dDLE9BRGhDLEVBQ3lDLEVBRHpDOztBQUVFOzs7Ozs7Ozs7QUFBQSxVQUFBO01BV0EsTUFBTSxDQUFDLGNBQVAsR0FBd0I7TUFDeEIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztNQUNuRSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxNQUFNLENBQUMsYUFBaEQ7TUFFQSxNQUFNLENBQUMsUUFBUCxHQUFrQjtRQUFFLEtBQUEsRUFBTyxJQUFUOztNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQjtNQUVyQixNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEVBQUQ7UUFDaEIsSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLEVBQWQsQ0FBSDtBQUNFLGlCQUFPLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLENBQUEsR0FBNEIsR0FBNUIsR0FBa0Msa0JBQUEsQ0FBbUIsRUFBRyxDQUFBLENBQUEsQ0FBdEIsRUFEM0M7U0FBQSxNQUFBO0FBR0UsaUJBQU8sa0JBQUEsQ0FBbUIsRUFBRSxDQUFDLElBQXRCLENBQUEsR0FBOEIsR0FBOUIsR0FBb0Msa0JBQUEsQ0FBbUIsRUFBRSxDQUFDLEdBQXRCLEVBSDdDOztNQURnQjtNQU1sQixNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFDLGFBQUQ7QUFDcEIsWUFBQTtRQUFBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE9BQU8sQ0FBQyw4QkFBUixDQUF1QyxhQUF2QztRQUNwQixNQUFNLENBQUMsU0FBUCxHQUFtQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBaEIsQ0FBc0I7VUFBQyxPQUFBLEVBQVMsV0FBVjtVQUF1QixLQUFBLEVBQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFoRDtTQUF0QjtRQUNuQixtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxhQUF6QztRQUNBLFlBQUEsR0FBZSxPQUFPLENBQUMsYUFBUixDQUFzQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxTQUF0QixDQUF0QjtRQUNmLGFBQUEsR0FBZ0IsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBcEIsQ0FBOEIsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsWUFBaEIsQ0FBOUI7UUFDaEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUF0QixHQUNFO1VBQUEsTUFBQSxFQUFRLE9BQVI7VUFDQSxPQUFBLEVBQVMsYUFEVDs7UUFFRixJQUE2QixNQUFNLENBQUMsVUFBcEM7aUJBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFsQixDQUFBLEVBQUE7O01BVG9CO01BV3RCLFVBQUEsR0FBYSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QjtNQUNiLElBQUcsVUFBSDtRQUNFLE1BQU0sQ0FBQyxZQUFQLENBQW9CLFVBQXBCLEVBREY7O01BRUEsS0FBQSxHQUFRLFNBQVMsQ0FBQyxNQUFWLENBQUEsQ0FBa0IsQ0FBQztNQUMzQixJQUFHLEtBQUg7UUFDRSxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBYixDQUFtQixLQUFuQixDQUF5QixDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBdEIsR0FBOEI7UUFDOUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUF0QixHQUE2QixHQUFHLENBQUM7UUFDakMsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBakM7UUFDQSxhQUFBLEdBQWdCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCLENBQUEsSUFBb0M7UUFDcEQsbUJBQUEsR0FBc0IsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsQ0FBQSxJQUEwQztRQUNoRSxNQUFNLENBQUMsRUFBUCxDQUFVLGFBQVYsRUFBeUIsbUJBQXpCLEVBUEY7T0FBQSxNQUFBO1FBU0UsS0FBQSxHQUFRLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCO1FBQ1IsSUFBRyxLQUFIO1VBQ0UsR0FBQSxHQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQWIsQ0FBbUIsS0FBbkIsQ0FBeUIsQ0FBQztVQUNoQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQXRCLEdBQThCO1VBQzlCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBdEIsR0FBNkIsR0FBRyxDQUFDLEtBSG5DO1NBVkY7O01BZUEsTUFBTSxDQUFDLEtBQVAsR0FBZTtNQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQjtNQUNwQixNQUFNLENBQUMsaUJBQVAsR0FBMkI7TUFDM0IsTUFBTSxDQUFDLEdBQVAsR0FBYTtRQUFFLElBQUEsRUFBTSxFQUFSOztNQUNiLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BRXBCLE1BQU0sQ0FBQyxJQUFQLEdBQWMsSUFBSSxJQUFKLENBQ1o7UUFBQSxJQUFBLEVBQU0sSUFBTjtRQUNBLFlBQUEsRUFBYztVQUNaLE1BQUEsRUFBUSxJQURJO1NBRGQ7UUFJQSxLQUFBLEVBQU8sSUFKUDtRQUtBLElBQUEsRUFBTSxjQUxOO1FBTUEsTUFBQSxFQUFRO1VBQUEsU0FBQSxFQUFXLENBQ2pCLGlHQURpQixFQUVqQixpR0FGaUIsRUFHakIsaUdBSGlCLEVBSWpCLGlHQUppQixFQUtqQixpR0FMaUIsRUFNakIsaUdBTmlCLEVBT2pCLGlHQVBpQixFQVFqQixpR0FSaUIsQ0FBWDtTQU5SO09BRFk7TUFtQmQsS0FBSyxDQUFDLEdBQU4sQ0FBVSxNQUFWLEVBQWtCO1FBQUUsT0FBQSxFQUFTLElBQVg7T0FBbEIsQ0FDQSxDQUFDLElBREQsQ0FDTSxTQUFDLEdBQUQ7ZUFDSixNQUFNLENBQUMsUUFBUCxHQUFrQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxRQUF0QixFQUFnQyxHQUFHLENBQUMsSUFBcEM7TUFEZCxDQUROLEVBR0UsU0FBQyxHQUFEO2VBQ0EsTUFBTSxDQUFDLFFBQVAsR0FBa0I7VUFBRSxZQUFBLEVBQWMsQ0FBQyxJQUFELENBQWhCO1VBQXdCLEtBQUEsRUFBTyxJQUEvQjs7TUFEbEIsQ0FIRjtNQU1BLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBWixDQUFlLE9BQWYsRUFBd0IsU0FBQTtRQUN0QixPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sQ0FBQyxJQUFuQjtRQUNBLE9BQU8sQ0FBQyxJQUFSLEdBQWUsTUFBTSxDQUFDO2VBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQW5CLENBQTZCLFVBQTdCLEVBQXlDLFNBQUMsR0FBRDtBQUN2QyxjQUFBO1VBQUEsR0FBQSxHQUFNO1lBQUUsR0FBQSxFQUFLLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQWxCLENBQXlCLEdBQUcsQ0FBQyxJQUE3QixDQUFrQyxDQUFDLFFBQW5DLENBQUEsQ0FBUDs7VUFDTixJQUFBLEdBQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBcEIsQ0FBOEIsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsR0FBRyxDQUFDLEdBQXBCLENBQTlCO1VBQ1AsT0FBTyxDQUFDLEdBQVIsQ0FBWSwyQkFBWixFQUF5QyxHQUF6QyxFQUE4QyxJQUE5QztVQUNBLGFBQUEsR0FBZ0IsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEI7VUFDaEIsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsQ0FBQyxHQUFELENBQXZCO1VBQ0EsYUFBYyxDQUFBLElBQUEsQ0FBZCxHQUFzQjtpQkFDdEIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsYUFBekM7UUFQdUMsQ0FBekM7TUFIc0IsQ0FBeEI7TUFhQSxNQUFNLENBQUMsZUFBUCxHQUF5QixTQUFBO0FBQ3ZCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixPQUFPLENBQUMsR0FBUixDQUFZLHVDQUFaLEVBQXFELFNBQXJEO1FBQ0EsTUFBTSxDQUFDLFdBQVAsR0FBcUIsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLGtCQUF4QixDQUEyQyxtQkFBM0M7UUFDckIsRUFBRSxDQUFDLEdBQUgsQ0FBTyxDQUNMLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQWhDLENBQTBDLFNBQUEsR0FBWSx5QkFBdEQsRUFBaUYsTUFBTSxDQUFDLFdBQXhGLENBREssRUFFTCxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFoQyxDQUEwQyxTQUFBLEdBQVksMEJBQXRELEVBQWtGLE1BQU0sQ0FBQyxXQUF6RixDQUZLLEVBR0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBaEMsQ0FBMEMsU0FBQSxHQUFZLHdCQUF0RCxFQUFnRixNQUFNLENBQUMsV0FBdkYsQ0FISyxDQUFQLENBS0EsRUFBQyxLQUFELEVBTEEsQ0FLTyxTQUFDLENBQUQ7VUFDTCxPQUFPLENBQUMsR0FBUixDQUFZLDZDQUFaLEVBQTJELENBQTNEO1VBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSw0QkFBWjtVQUNBLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxrQkFBeEIsQ0FBMkMsaUJBQTNDO2lCQUNyQixFQUFFLENBQUMsR0FBSCxDQUFPLENBQ0wsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBaEMsQ0FBMEMsU0FBQSxHQUFZLHlCQUF0RCxFQUFpRixNQUFNLENBQUMsV0FBeEYsQ0FESyxFQUVMLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQWhDLENBQTBDLFNBQUEsR0FBWSwwQkFBdEQsRUFBa0YsTUFBTSxDQUFDLFdBQXpGLENBRkssRUFHTCxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFoQyxDQUEwQyxTQUFBLEdBQVksd0JBQXRELEVBQWdGLE1BQU0sQ0FBQyxXQUF2RixDQUhLLENBQVA7UUFKSyxDQUxQLENBY0EsQ0FBQyxJQWRELENBY00sU0FBQyxPQUFEO1VBQ0osT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCLE9BQXpCO1VBQ0EsTUFBTSxDQUFDLG9CQUFQLEdBQThCLE9BQVEsQ0FBQSxDQUFBO1VBQ3RDLE1BQU0sQ0FBQyxxQkFBUCxHQUErQixPQUFRLENBQUEsQ0FBQTtVQUN2QyxNQUFNLENBQUMsWUFBUCxHQUFzQixPQUFRLENBQUEsQ0FBQTtpQkFDOUIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7UUFMZCxDQWROO2VBcUJBLEtBQUssQ0FBQyxHQUFOLENBQVUsbUJBQUEsR0FBc0IsU0FBdEIsR0FBa0MsT0FBNUMsQ0FDQSxFQUFDLEtBQUQsRUFEQSxDQUNPLFNBQUMsR0FBRDtpQkFDTCxLQUFLLENBQUMsR0FBTixDQUFVLGlCQUFBLEdBQW9CLFNBQXBCLEdBQWdDLE9BQTFDO1FBREssQ0FEUCxDQUdBLENBQUMsSUFIRCxDQUdNLFNBQUMsR0FBRDtpQkFDSixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWhCLEdBQTBCLE1BQU0sQ0FBQyxlQUFQLENBQXVCLEdBQUcsQ0FBQyxJQUEzQixFQUFpQyxDQUFDLE9BQUQsRUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQW5CLENBQWpDO1FBRHRCLENBSE4sQ0FLQSxFQUFDLEtBQUQsRUFMQSxDQUtPLFNBQUMsQ0FBRDtpQkFDTCxPQUFPLENBQUMsR0FBUixDQUFZLHdCQUFaLEVBQXNDLENBQXRDO1FBREssQ0FMUDtNQXpCdUI7TUFpQ3pCLE1BQU0sQ0FBQyxlQUFQLENBQUE7TUFFQSxNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFDLEtBQUQ7UUFDcEIsVUFBVSxDQUFDLFNBQVgsR0FBdUI7UUFDdkIsSUFBSSxLQUFKO2lCQUNFLFVBQVUsQ0FBQyxTQUFYLElBQXdCLEtBQUEsR0FBUSxNQURsQzs7TUFGb0I7TUFLdEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQyxHQUFELEVBQU0sT0FBTjtBQUNmLFlBQUE7UUFBQSxTQUFBLEdBQVksU0FBQTtVQUNWLE9BQU8sQ0FBQyxHQUFSLENBQVksc0JBQVosRUFBb0MsR0FBcEM7aUJBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBbEIsQ0FBc0IsR0FBdEIsQ0FBMEIsQ0FBQyxJQUEzQixDQUFnQyxTQUFDLE1BQUQ7bUJBQzlCLElBQUksT0FBSixDQUFZLFNBQUMsT0FBRCxFQUFVLE1BQVY7Y0FDVixNQUFNLENBQUMsRUFBUCxDQUFVLE1BQVYsRUFBa0IsU0FBQyxJQUFEO2dCQUNoQixJQUFBLEdBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBbEIsQ0FBeUIsSUFBekIsQ0FBOEIsQ0FBQyxRQUEvQixDQUFBO2dCQUNQLElBQTJCLE9BQTNCO2tCQUFBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLElBQVgsRUFBUDs7dUJBQ0EsT0FBQSxDQUFRLElBQVI7Y0FIZ0IsQ0FBbEI7cUJBSUEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFNBQUMsS0FBRDt1QkFDakIsTUFBQSxDQUFPLEtBQVA7Y0FEaUIsQ0FBbkI7WUFMVSxDQUFaO1VBRDhCLENBQWhDO1FBRlU7UUFXWixJQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBdEI7QUFDRSxpQkFBTyxLQUFLLENBQUMsR0FBTixDQUFVLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBbkIsR0FBNkIsUUFBN0IsR0FBd0MsR0FBbEQsQ0FDUCxDQUFDLElBRE0sQ0FDRCxTQUFDLEdBQUQ7bUJBQVMsR0FBRyxDQUFDO1VBQWIsQ0FEQyxDQUVQLEVBQUMsS0FBRCxFQUZPLENBRUEsU0FBQTttQkFBRyxTQUFBLENBQUE7VUFBSCxDQUZBLEVBRFQ7U0FBQSxNQUFBO0FBS0UsaUJBQU8sU0FBQSxDQUFBLEVBTFQ7O01BWmU7TUFtQmpCLE1BQU0sQ0FBQyxVQUFQLEdBQ0U7UUFBQSxNQUFBLEVBQVEsQ0FBUjtRQUNBLE9BQUEsRUFBUyxFQURUOztNQUVGLE1BQU0sQ0FBQyxlQUFQLEdBQ0U7UUFBQSxJQUFBLEVBQU0sRUFBTjtRQUNBLEtBQUEsRUFBTyxFQURQOztNQUdGLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLFNBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsRUFBaEI7QUFDckIsWUFBQTtRQUFBLElBQTJCLEtBQTNCO1VBQUEsS0FBSyxDQUFDLGVBQU4sQ0FBQSxFQUFBOztRQUVBLE9BQUEsR0FDRTtVQUFBLE9BQUEsRUFBUyxVQUFUOztRQUVGLElBQUcsTUFBTSxDQUFDLElBQVAsS0FBZSxRQUFsQjtVQUNFLE9BQU8sQ0FBQyxNQUFSLENBQWUsT0FBZixFQUNFO1lBQUEsU0FBQSxFQUFXLENBQVg7WUFDQSxTQUFBLEVBQVcsQ0FBQyxDQURaO1dBREYsRUFERjs7UUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLE9BQWYsRUFBd0IsTUFBeEI7UUFDQSxPQUFBLEdBQVU7UUFDVixJQUFHLE1BQU0sQ0FBQyxVQUFWO1VBQ0UsWUFBQSxHQUFlLE9BQU8sQ0FBQyxhQUFSLENBQXNCLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBTSxDQUFDLFNBQXRCLENBQXRCO1VBQ2YsYUFBQSxHQUFnQixRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFwQixDQUE4QixRQUFRLENBQUMsTUFBVCxDQUFnQixZQUFoQixDQUE5QjtVQUNoQixPQUFPLENBQUMsTUFBUixHQUFpQixDQUFDLENBQUMsT0FBRCxFQUFVLGFBQVYsQ0FBRDtVQUNqQixPQUFPLENBQUMsU0FBUixHQUFvQixJQUFJLElBQUosQ0FBQSxDQUFVLENBQUMsV0FBWCxDQUFBO1VBQ3BCLE1BQUEsR0FBUyxJQUFJLENBQUMsU0FBTCxDQUFlO1lBQUUsR0FBQSxFQUFLLE9BQVA7WUFBZ0IsR0FBQSxFQUFLLFlBQXJCO1dBQWY7VUFDVCxPQUFBLEdBQVUsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmO1VBQ1YsR0FBQSxHQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkIsTUFBM0IsRUFBbUMsT0FBbkMsRUFBNEMsTUFBTSxDQUFDLFVBQW5EO1VBQ04sSUFBQSxHQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQXBCLENBQThCLFFBQVEsQ0FBQyxNQUFULENBQWdCLEdBQWhCLENBQTlCO1VBQ1AsT0FBQSxHQUFVO1lBQUUsR0FBQSxFQUFLLEdBQVA7WUFBWSxJQUFBLEVBQU0sSUFBbEI7O1VBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBbEIsQ0FBc0IsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUF0QixDQUE2QixHQUE3QixDQUF0QixDQUF3RCxDQUFDLElBQXpELENBQThELFNBQUMsQ0FBRDttQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBbkIsQ0FBMkIsVUFBM0IsRUFBdUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUF0QixDQUE2QixHQUE3QixDQUF2QztVQUQ0RCxDQUE5RCxFQVZGO1NBQUEsTUFBQTtVQWFFLE9BQUEsR0FDRTtZQUFBLE9BQUEsRUFDRTtjQUFBLGVBQUEsRUFBaUIsU0FBQSxHQUFZLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBbkQ7YUFERjtZQWRKOztlQWlCQSxLQUFLLENBQUMsSUFBTixDQUFXLGVBQVgsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckMsQ0FDQSxFQUFDLEtBQUQsRUFEQSxDQUNPLFNBQUE7aUJBQ0wsS0FBSyxDQUFDLElBQU4sQ0FBVyxnQ0FBWCxFQUE2QyxPQUE3QyxFQUFzRCxPQUF0RDtRQURLLENBRFAsQ0FHQSxDQUFDLElBSEQsQ0FHTSxDQUFDLFNBQUMsUUFBRDtVQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksUUFBWjtVQUVBLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBbEIsR0FBNEI7VUFDNUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFsQixHQUEyQjtVQUMzQixNQUFNLENBQUMsZUFBZSxDQUFDLElBQXZCLEdBQThCO1VBQzlCLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBdkIsR0FBK0I7VUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFiLENBQXdCLGNBQXhCLEVBQ0U7WUFBQSxPQUFBLEVBQVMsUUFBUSxDQUFDLElBQWxCO1lBQ0EsRUFBQSxFQUFJLEVBREo7V0FERjtVQUdBLElBQTZGLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBM0c7WUFBQSxNQUFNLENBQUMsY0FBUCxDQUFzQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQW5CLEdBQTZCLFFBQTdCLEdBQXdDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBNUUsRUFBQTs7aUJBQ0EsUUFBUSxDQUFDO1FBWEosQ0FBRCxDQUhOLEVBZUcsU0FBQyxhQUFEO1VBQ0QsTUFBTSxDQUFDLEtBQVAsR0FBZSxhQUFhLENBQUMsSUFBZCxJQUFzQixJQUFJLENBQUMsU0FBTCxDQUFlLGFBQWY7aUJBQ3JDLE9BQU8sQ0FBQyxLQUFSLENBQWMsYUFBZDtRQUZDLENBZkg7TUE3QnFCO01BZ0R2QixNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFBO2VBQ3BCLFNBQVMsQ0FBQyxJQUFWLENBQWUsc0JBQUEsR0FBeUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFyRDtNQURvQjtNQUd0QixNQUFNLENBQUMsS0FBUCxHQUFlLFNBQUE7ZUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsR0FBOEIsQ0FBQztNQURsQjtNQUdmLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLFNBQUE7UUFDdEIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBUyxDQUFDLElBQVYsQ0FDbEI7VUFBQSxTQUFBLEVBQVcsTUFBTSxDQUFDLGlCQUFsQjtVQUNBLFdBQUEsRUFBYSwyQkFEYjtVQUVBLElBQUEsRUFBTSxJQUZOO1VBR0EsS0FBQSxFQUFPLE1BSFA7U0FEa0I7UUFNcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBM0IsQ0FBZ0MsU0FBQTtpQkFDOUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUF2QixDQUFBO1FBRDhCLENBQWhDO2VBRUEsTUFBTSxDQUFDLEdBQVAsQ0FBVyxtQkFBWCxFQUFnQyxTQUFBO2lCQUM5QixNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWxCLENBQUE7UUFEOEIsQ0FBaEM7TUFUc0I7TUFZeEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQTtBQUNuQixZQUFBO1FBQUEsT0FBQSxHQUFVLE9BQU8sQ0FBQyxlQUFSLENBQXdCLElBQXhCLEVBQThCLFdBQTlCO1FBQ1YsTUFBTSxDQUFDLFVBQVAsR0FBb0IsT0FBTyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLE9BQU8sQ0FBQztlQUMzQixNQUFNLENBQUMsYUFBUCxHQUF1QixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxVQUF0QixFQUFrQyxVQUFsQztNQUpKO01BTXJCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUE7QUFDbkIsWUFBQTtRQUFBLGFBQUEsR0FBZ0IsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkI7UUFDaEIsYUFBYSxDQUFDLElBQWQsR0FBcUIsOEJBQUEsR0FBaUMsU0FBQSxDQUFVLE1BQU0sQ0FBQyxhQUFqQjtRQUN0RCxhQUFhLENBQUMsTUFBZCxHQUF1QjtRQUN2QixhQUFhLENBQUMsUUFBZCxHQUF5QjtlQUN6QixhQUFhLENBQUMsS0FBZCxDQUFBO01BTG1CO01BT3JCLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFNBQUE7UUFDZCxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsR0FBOEI7UUFDOUIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7UUFDdkIsTUFBTSxDQUFDLGNBQVAsR0FBd0I7UUFDeEIsbUJBQW1CLENBQUMsUUFBcEIsQ0FBQTtRQUNBLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVY7UUFDQSxNQUFNLENBQUMsVUFBUCxHQUFvQjtlQUNwQixNQUFNLENBQUMsU0FBUCxHQUFtQjtNQVBMO01BU2hCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxLQUFmO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU8sS0FBSyxDQUFDLElBQU4sSUFBYyxLQUFLLENBQUM7UUFDM0IsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWxCO1VBQ0UsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFwQixDQUEwQixTQUExQixDQUFIO1lBQ0UsSUFBRyxJQUFJLENBQUMsSUFBTCxLQUFhLFFBQWhCO0FBQ0UscUJBQU8sTUFEVDs7WUFFQSxhQUFBLEdBQWdCLENBQUMsSUFBSSxDQUFDLFNBQUwsR0FBaUIsSUFBSSxDQUFDLFNBQXZCLENBQUEsR0FBb0M7WUFDcEQsSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsS0FBdUIsaUJBQXZCLElBQTZDLElBQUksQ0FBQyxNQUFMLElBQWUsYUFBL0Q7QUFDRSxxQkFBTyxNQURUO2FBQUEsTUFFSyxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixLQUF1QixpQkFBdkIsSUFBNkMsSUFBSSxDQUFDLE1BQUwsSUFBZSxhQUEvRDtBQUNILHFCQUFPLE1BREo7YUFBQSxNQUVBLElBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLEtBQXVCLGdCQUF2QixJQUE0QyxJQUFJLENBQUMsTUFBTCxLQUFlLGFBQTlEO0FBQ0gscUJBQU8sTUFESjthQVJQO1dBQUEsTUFVSyxJQUFHLElBQUksQ0FBQyxJQUFMLEtBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUEvQjtBQUNILG1CQUFPLE1BREo7V0FYUDs7UUFhQSxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBbEI7VUFDRSxJQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBZixLQUErQixDQUEvQixJQUFxQyxPQUFPLEtBQUssQ0FBQyxRQUFiLEtBQXlCLFFBQWpFO0FBQ0UsbUJBQU8sTUFEVDtXQUFBLE1BRUssSUFBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQWYsR0FBOEIsQ0FBOUIsSUFBb0MsS0FBSyxDQUFDLFFBQU4sR0FBaUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUF2RTtBQUNILG1CQUFPLE1BREo7V0FIUDs7QUFLQSxlQUFPO01BcEJVO01Bc0JuQixNQUFNLENBQUMsV0FBUCxHQUFxQixTQUFDLEtBQUQ7ZUFDbkIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFwQixDQUFBO01BRG1CO01BR3JCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUE7UUFDbkIsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7VUFDRSxJQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixLQUFxQixFQUF4QjtZQUNFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQjttQkFDcEIsTUFBTSxDQUFDLE1BQVAsQ0FBQSxFQUZGO1dBREY7U0FBQSxNQUFBO1VBS0UsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO1VBQ3BCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBWCxHQUFrQjtVQUNsQixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVgsR0FBc0I7aUJBQ3RCLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsRUFSRjs7TUFEbUI7TUFXckIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsU0FBQyxHQUFEO0FBQ3JCLFlBQUE7UUFBQSxXQUFBLEdBQ0U7VUFBQSxJQUFBLEVBQU0sR0FBRyxDQUFDLElBQVY7VUFDQSxJQUFBLEVBQU0sR0FBRyxDQUFDLElBRFY7VUFFQSxRQUFBLEVBQVUsR0FBRyxDQUFDLFFBRmQ7VUFHQSxHQUFBLEVBQUssR0FBRyxDQUFDLEdBSFQ7O2VBSUYsR0FBRyxDQUFDLE9BQUosR0FBYyxJQUFJLENBQUMsU0FBTCxDQUFlLFdBQWYsRUFBNEIsTUFBNUIsRUFBdUMsQ0FBdkM7TUFOTztNQVF2QixNQUFNLENBQUMsZUFBUCxHQUF5QixTQUFDLElBQUQsRUFBTyxVQUFQO0FBQ3ZCLFlBQUE7UUFBQSxJQUFHLElBQUksQ0FBQyxLQUFMLElBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUE3QjtVQUNFLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQyxJQUFkLEdBQXFCO1VBQ2pDLElBQUksQ0FBQyxHQUFMLEdBQVcsSUFBSSxDQUFDLEtBQU0sQ0FBQSxDQUFBLENBQUUsQ0FBQztVQUN6QixJQUFJLENBQUMsR0FBTCxHQUFXLElBQUksQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFFLENBQUM7QUFDekI7QUFBQSxlQUFBLFFBQUE7O0FBQ0Usb0JBQU8sQ0FBQyxDQUFDLElBQVQ7QUFBQSxtQkFDTyxNQURQO2dCQUVJLElBQUEsQ0FBeUIsSUFBSSxDQUFDLElBQTlCO2tCQUFBLElBQUksQ0FBQyxJQUFMLEdBQVksQ0FBQyxDQUFDLElBQWQ7O0FBREc7QUFEUCxtQkFHTyxVQUhQO2dCQUlJLElBQUEsQ0FBNkIsSUFBSSxDQUFDLFFBQWxDO2tCQUFBLElBQUksQ0FBQyxRQUFMLEdBQWdCLENBQUMsQ0FBQyxJQUFsQjs7QUFERztBQUhQLG1CQUtPLE9BTFA7Z0JBTUksSUFBSSxDQUFDLFFBQUwsR0FBZ0IsUUFBUSxDQUFDLEdBQVQsQ0FBYSxDQUFDLENBQUMsR0FBZixDQUFtQixDQUFDLFFBQXBCLENBQUE7QUFOcEI7QUFERixXQUpGOztRQVlBLElBQTZCLElBQUksQ0FBQyxRQUFMLElBQWtCLENBQUksSUFBSSxDQUFDLElBQXhEO1VBQUEsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUMsU0FBakI7O1FBQ0EsSUFBQSxDQUFvQyxJQUFJLENBQUMsSUFBekM7VUFBQSxJQUFJLENBQUMsSUFBTCxHQUFZLFVBQVUsQ0FBQyxNQUF2Qjs7UUFDQSxJQUFBLENBQWlFLElBQUksQ0FBQyxRQUF0RTtVQUFBLElBQUksQ0FBQyxRQUFMLEdBQWdCLFFBQVEsQ0FBQyxHQUFULENBQWEsVUFBVSxDQUFDLEtBQXhCLENBQThCLENBQUMsUUFBL0IsQ0FBQSxFQUFoQjs7QUFDQSxlQUFPO01BaEJnQjtNQWtCekIsTUFBTSxDQUFDLGtCQUFQLEdBQTRCLFNBQUMsRUFBRCxFQUFLLFFBQUw7ZUFDMUIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQTdCLENBQXdDLGtCQUFBLENBQW1CLEVBQUUsQ0FBQyxLQUF0QixDQUFBLEdBQStCLEdBQS9CLEdBQXFDLGtCQUFBLENBQW1CLEVBQUUsQ0FBQyxJQUF0QixDQUE3RSxFQUEwRyxDQUExRyxDQUNBLENBQUMsSUFERCxDQUNNLFNBQUMsR0FBRDtVQUNKLElBQUcsR0FBRyxDQUFDLE1BQVA7QUFDRSxtQkFBTyxNQUFNLENBQUMsT0FBUCxDQUFlLEdBQUksQ0FBQSxDQUFBLENBQUUsQ0FBQyxLQUF0QixFQUE2QixJQUE3QixDQUFrQyxDQUFDLElBQW5DLENBQXdDLFNBQUMsR0FBRDtBQUM3QyxxQkFBTztnQkFBRSxJQUFBLEVBQU0sR0FBUjs7WUFEc0MsQ0FBeEMsRUFEVDtXQUFBLE1BQUE7QUFLRSxtQkFBTztjQUFFLElBQUEsRUFBTSxFQUFSO2NBTFQ7O1FBREksQ0FETixDQVFBLENBQUMsSUFSRCxDQVFNLFNBQUMsR0FBRDtBQUNKLGNBQUE7VUFBQSxPQUFBLEdBQVUsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsR0FBRyxDQUFDLElBQTNCLEVBQWlDLEVBQWpDO1VBQ1YsSUFBRyxRQUFIO0FBQ0UsbUJBQU8sUUFBQSxDQUFTLE9BQVQsRUFEVDtXQUFBLE1BQUE7QUFHRSxtQkFBTyxRQUhUOztRQUZJLENBUk47TUFEMEI7TUFnQjVCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsSUFBakI7QUFDbkIsWUFBQTtRQUFBLENBQUEsR0FBSSxLQUFLLENBQUM7UUFDVixJQUFVLE9BQU8sQ0FBQyxPQUFSLENBQWdCLENBQWhCLENBQWtCLENBQUMsT0FBbkIsQ0FBMkIsR0FBM0IsQ0FBK0IsQ0FBQyxNQUExQztBQUFBLGlCQUFBOztRQUNBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLE9BQXJCO1FBQ0EsTUFBTSxDQUFDLE9BQVAsR0FBaUI7UUFDakIsSUFBQSxDQUFjLE1BQU0sQ0FBQyxpQkFBUCxDQUF5QixPQUF6QixDQUFkO0FBQUEsaUJBQUE7O1FBQ0EsTUFBTSxDQUFDLGtCQUFQLENBQTBCO1VBQUUsSUFBQSxFQUFNLE9BQVI7VUFBaUIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBdkM7U0FBMUIsRUFBaUYsU0FBQyxPQUFEO2lCQUMvRSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7bUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO1VBQS9CLENBQWQ7UUFEK0UsQ0FBakY7UUFFQSxhQUFBLEdBQWdCLFNBQVMsQ0FBQyxJQUFWLENBQ2Q7VUFBQSxTQUFBLEVBQVcsTUFBTSxDQUFDLGlCQUFsQjtVQUNBLFdBQUEsRUFBYSw4QkFEYjtVQUVBLElBQUEsRUFBTSxJQUZOO1VBR0EsS0FBQSxFQUFPLE1BSFA7U0FEYztRQU1oQixhQUFhLENBQUMsUUFBUSxDQUFDLElBQXZCLENBQTRCLFNBQUE7aUJBQzFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBdkIsQ0FBQTtRQUQwQixDQUE1QjtlQUVBLE1BQU0sQ0FBQyxHQUFQLENBQVcsbUJBQVgsRUFBZ0MsU0FBQTtpQkFDOUIsYUFBYSxDQUFDLEtBQWQsQ0FBQTtRQUQ4QixDQUFoQztNQWhCbUI7TUFtQnJCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE1BQU0sQ0FBQyxPQUFQLElBQWtCLE1BQU0sQ0FBQzs7QUFFMUM7Ozs7Ozs7Ozs7Ozs7Ozs7TUFpQkEsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFHckIsTUFBTSxDQUFDLHFCQUFQLEdBQStCLFNBQUE7ZUFDN0IsTUFBTSxDQUFDLFdBQVAsR0FBcUIsQ0FBQyxNQUFNLENBQUM7TUFEQTtNQUcvQixNQUFNLENBQUMsaUJBQVAsR0FBMkIsU0FBQyxHQUFELEVBQU0sU0FBTjtBQUN6QixZQUFBO1FBQUEsU0FBQSxHQUFZLFNBQUEsSUFBYSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFiLENBQW1CLEdBQUcsQ0FBQyxHQUF2QjtRQUN6QixHQUFBLEdBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW5CLENBQXVDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBM0QsRUFBZ0UsWUFBaEU7UUFDTixNQUFBLEdBQVMsT0FBTyxDQUFDLE1BQVIsQ0FBZSxHQUFmO1FBQ1QsT0FBQSxHQUFVLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQWIsQ0FBb0IsR0FBRyxDQUFDLEdBQXhCLEVBQTZCLE1BQTdCLEVBQXFDLENBQUMsT0FBRCxDQUFyQztRQUNWLElBQUcsT0FBSDtVQUFnQixPQUFPLENBQUMsR0FBUixDQUFZLGlCQUFaLEVBQWhCO1NBQUEsTUFBQTtVQUFtRCxPQUFPLENBQUMsS0FBUixDQUFjLG1CQUFkLEVBQW5EOztBQUNBLGVBQU87TUFOa0I7TUFRM0IsTUFBTSxDQUFDLGVBQVAsR0FBeUIsU0FBQyxRQUFELEVBQVcsVUFBWCxFQUF1QixlQUF2QjtBQUN2QixZQUFBO1FBQUEsY0FBQSxHQUFpQixTQUFDLEdBQUQ7QUFDZixjQUFBO1VBQUEsU0FBQSxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQWIsQ0FBbUIsR0FBRyxDQUFDLEdBQXZCO1VBQ1osR0FBRyxDQUFDLElBQUosR0FBVyxTQUFTLENBQUM7VUFDckIsSUFBQSxDQUFPLEdBQUcsQ0FBQyxZQUFYO1lBQ0UsT0FBQSxHQUFVLFFBQVEsQ0FBQyxNQUFULENBQWdCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBcEM7WUFDVixHQUFHLENBQUMsWUFBSixHQUFtQixRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFwQixDQUE4QixPQUE5QixFQUZyQjs7VUFJQSxJQUFVLGVBQUEsSUFBb0IsQ0FBSSxNQUFNLENBQUMsaUJBQVAsQ0FBeUIsR0FBekIsRUFBOEIsU0FBOUIsQ0FBbEM7QUFBQSxtQkFBQTs7VUFFQSxHQUFHLENBQUMsUUFBSixHQUFlLFFBQVEsQ0FBQyxHQUFULENBQWEsR0FBRyxDQUFDLFlBQUosSUFBb0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFwRCxDQUF1RCxDQUFDLFFBQXhELENBQUE7VUFDZixHQUFHLENBQUMsWUFBSixHQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBO1VBQ25DLENBQUEsR0FBSTtVQUNKLENBQUEsR0FBSTtVQUNKLGFBQUEsR0FBZ0I7QUFDaEIsaUJBQU0sQ0FBQSxHQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQTFCO1lBQ0UsS0FBQSxHQUFRLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUE1QixDQUFvQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQXZEO1lBQ1IsSUFBRyxLQUFBLEdBQVEsQ0FBQyxDQUFULElBQWUsS0FBQSxHQUFRLGFBQTFCO2NBQ0UsYUFBQSxHQUFnQjtjQUNoQixHQUFHLENBQUMsWUFBSixHQUFtQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBLEVBRnJDO2FBQUEsTUFHSyxJQUFHLENBQUMsR0FBRyxDQUFDLFdBQUwsSUFBcUIsUUFBQSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLEVBQW5CLEtBQTBCLE1BQTFCLElBQUEsR0FBQSxLQUFrQyxVQUFsQyxDQUF4QjtjQUNILEdBQUcsQ0FBQyxXQUFKLEdBQWtCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsRUFEbEM7O1lBRUwsQ0FBQTtVQVBGO1VBUUEsR0FBRyxDQUFDLGVBQUosR0FBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQTtVQUN6QyxDQUFBLEdBQUk7VUFDSixhQUFBLEdBQWdCO0FBQ2hCLGlCQUFNLENBQUEsR0FBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUE3QjtZQUNFLEtBQUEsR0FBUSxNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBNUIsQ0FBb0MsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUExRDtZQUNSLElBQUcsS0FBQSxHQUFRLENBQUMsQ0FBVCxJQUFlLEtBQUEsR0FBUSxhQUExQjtjQUNFLGFBQUEsR0FBZ0I7Y0FDaEIsR0FBRyxDQUFDLGVBQUosR0FBc0IsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQSxFQUYzQzthQUFBLE1BR0ssSUFBRyxDQUFDLEdBQUcsQ0FBQyxjQUFMLElBQXdCLFNBQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxFQUF0QixLQUE2QixNQUE3QixJQUFBLElBQUEsS0FBcUMsVUFBckMsQ0FBM0I7Y0FDSCxHQUFHLENBQUMsY0FBSixHQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLEVBRHhDOztZQUVMLENBQUE7VUFQRjtVQVFBLFVBQUEsR0FBYSxHQUFHLENBQUM7VUFDakIsS0FBQSxHQUFRO1VBQ1IsR0FBRyxDQUFDLFNBQUosR0FBZ0I7VUFDaEIsR0FBRyxDQUFDLFVBQUosR0FBaUI7VUFDakIsR0FBRyxDQUFDLE9BQUosR0FBYztVQUNkLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLElBQUksS0FBSixDQUFVLENBQVY7QUFDaEIsa0JBQU8sVUFBVSxDQUFDLElBQWxCO0FBQUEsaUJBQ08saUJBRFA7Y0FFSSxHQUFHLENBQUMsU0FBSixHQUFnQjtxQkFDaEIsR0FBRyxDQUFDLFVBQUosR0FBaUI7QUFIckIsaUJBSU8sWUFKUDtjQUtJLEdBQUcsQ0FBQyxTQUFKLEdBQWdCO3FCQUNoQixHQUFHLENBQUMsVUFBSixHQUFpQjtBQU5yQixpQkFPTyxtQkFQUDtjQVFJLEdBQUcsQ0FBQyxTQUFKLEdBQWdCO2NBQ2hCLEdBQUcsQ0FBQyxVQUFKLEdBQWlCO3FCQUNqQixHQUFHLENBQUMsT0FBSixHQUFjO0FBVmxCLGlCQVdPLFFBWFA7Y0FZSSxNQUFBLEdBQVMsVUFBVSxDQUFDO2NBQ3BCLGFBQUEsR0FBZ0IsQ0FBQyxVQUFVLENBQUMsU0FBWCxHQUF1QixVQUFVLENBQUMsU0FBbkMsQ0FBQSxHQUFnRDtjQUNoRSxhQUFBLEdBQWdCLFVBQVUsQ0FBQyxTQUFYLEdBQXVCO2NBQ3ZDLGFBQUEsR0FBZ0IsVUFBVSxDQUFDLFNBQVgsR0FBdUI7Y0FDdkMsSUFBRyxNQUFBLEdBQVMsYUFBWjtnQkFDRSxHQUFHLENBQUMsU0FBSixHQUFnQjtnQkFDaEIsR0FBRyxDQUFDLFNBQUosR0FBbUIsYUFBQSxHQUFnQixDQUFuQixHQUEwQixHQUFHLENBQUMsU0FBOUIsR0FBNkMsSUFBSSxLQUFKLENBQVUsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFBLEdBQUksTUFBSixHQUFhLGFBQXZCLENBQVY7Z0JBQzdELEtBQUEsR0FBUSxDQUFDLE1BQUEsR0FBUyxhQUFULEdBQXlCLEdBQTFCLENBQUEsR0FBaUMsYUFBakMsR0FBaUQsSUFBakQsR0FBd0Q7dUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMscUNBQUEsR0FBd0MsS0FBeEMsR0FBZ0QsS0FKaEU7ZUFBQSxNQUtLLElBQUcsTUFBQSxHQUFTLGFBQVo7Z0JBQ0gsR0FBRyxDQUFDLFNBQUosR0FBZ0I7Z0JBQ2hCLEdBQUcsQ0FBQyxTQUFKLEdBQW1CLGFBQUEsR0FBZ0IsQ0FBQyxDQUFwQixHQUEyQixHQUFHLENBQUMsU0FBL0IsR0FBOEMsSUFBSSxLQUFKLENBQVUsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFBLEdBQUksTUFBSixHQUFhLGFBQXZCLENBQVY7Z0JBQzlELEtBQUEsR0FBUSxDQUFDLE1BQUEsR0FBUyxhQUFULEdBQXlCLEdBQTFCLENBQUEsR0FBaUMsYUFBakMsR0FBaUQsSUFBakQsR0FBd0Q7dUJBQ2hFLEdBQUcsQ0FBQyxPQUFKLEdBQWMsb0NBQUEsR0FBdUMsS0FBdkMsR0FBK0MsS0FKMUQ7ZUFBQSxNQUFBO2dCQU1ILEdBQUcsQ0FBQyxPQUFKLEdBQWM7dUJBQ2QsR0FBRyxDQUFDLFNBQUosR0FBZ0IsNENBUGI7O0FBckJUO1FBdkNlO2VBcUVqQixPQUFPLENBQUMsT0FBUixDQUFnQixRQUFoQixFQUEwQixTQUFDLEdBQUQsRUFBTSxHQUFOO0FBQ3hCLGNBQUE7QUFBQSxlQUFBLGVBQUE7O1lBQUEsR0FBSSxDQUFBLENBQUEsQ0FBSixHQUFTO0FBQVQ7VUFDQSxJQUFHLEdBQUcsQ0FBQyxTQUFKLElBQWtCLENBQUksR0FBRyxDQUFDLEdBQTdCO21CQUNFLE1BQU0sQ0FBQyxPQUFQLENBQWUsR0FBRyxDQUFDLFNBQW5CLENBQTZCLENBQUMsSUFBOUIsQ0FBbUMsU0FBQyxHQUFEO2NBQ2pDLEdBQUcsQ0FBQyxHQUFKLEdBQVU7cUJBQ1YsY0FBQSxDQUFlLEdBQWY7WUFGaUMsQ0FBbkMsRUFERjtXQUFBLE1BQUE7bUJBSUssY0FBQSxDQUFlLEdBQWYsRUFKTDs7UUFGd0IsQ0FBMUI7TUF0RXVCO01BK0V6QixNQUFNLENBQUMsR0FBUCxDQUFXLHFCQUFYLEVBQWtDLFNBQUE7ZUFDaEMsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFEVyxDQUFsQztNQUdBLFFBQUEsR0FBVyxTQUFDLEVBQUQ7QUFDVCxZQUFBO1FBQUEsSUFBRyxDQUFDLEVBQUo7QUFDRSxpQkFERjs7UUFFQSxHQUFBLEdBQU0sRUFBRSxDQUFDLHFCQUFILENBQUE7UUFDTixJQUFHLEdBQUcsQ0FBQyxHQUFQO1VBQ0UsSUFBRyxHQUFHLENBQUMsR0FBSixHQUFVLEVBQVYsR0FBZSxPQUFPLENBQUMsV0FBMUI7WUFDRSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFvQixHQUFHLENBQUMsR0FBSixHQUFVLEVBQTlCLEVBREY7V0FBQSxNQUVLLElBQUcsR0FBRyxDQUFDLE1BQUosR0FBYSxPQUFPLENBQUMsV0FBUixHQUFzQixDQUFDLE9BQU8sQ0FBQyxXQUFSLElBQXVCLFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBakQsQ0FBdEM7WUFDSCxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFvQixHQUFHLENBQUMsTUFBSixHQUFhLENBQUMsT0FBTyxDQUFDLFdBQVIsSUFBdUIsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFqRCxDQUFiLEdBQThFLEVBQWxHLEVBREc7V0FIUDs7TUFKUztNQVdYLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO01BQ3ZCLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFNBQUMsS0FBRCxFQUFRLEtBQVI7QUFDZCxZQUFBO1FBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFYLEdBQXFCO1FBQ3JCLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQjtRQUMxQixTQUFBLEdBQVksa0JBQUEsQ0FBbUIsQ0FBQyxLQUFBLElBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUF0QixJQUE4QixFQUEvQixDQUFrQyxDQUFDLFdBQW5DLENBQUEsQ0FBbkI7UUFDWixJQUFHLFNBQUEsS0FBYSxNQUFNLENBQUMsaUJBQXZCO1VBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFYLEdBQWtCO1VBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBWCxHQUFzQjtVQUN0QixNQUFNLENBQUMsZ0JBQVAsR0FBMEIsR0FINUI7O1FBSUEsTUFBTSxDQUFDLGlCQUFQLEdBQTJCO1FBQzNCLEtBQUEsR0FBUSxLQUFBLElBQVM7UUFDakIsTUFBQSxHQUFTO1FBQ1QsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFuQjtVQUNFLE1BQUEsR0FBUyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFoQixHQUF5QixDQUF6QixDQUEyQixDQUFDLFVBRHZEOztRQUVBLElBQUcsU0FBUyxDQUFDLE1BQWI7VUFDRSxNQUFNLENBQUMsYUFBUCxHQUF1QixNQUFNLENBQUMscUJBQXFCLENBQUMsVUFBN0IsQ0FBd0MsU0FBeEMsRUFBbUQsS0FBbkQsRUFBMEQsTUFBMUQsRUFEekI7U0FBQSxNQUFBO1VBR0UsTUFBTSxDQUFDLGFBQVAsR0FBdUIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFVBQTVCLENBQXVDLFNBQXZDLEVBQWtELEtBQWxELEVBQXlELE1BQXpELEVBSHpCOztRQUlBLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBckIsQ0FBMEIsU0FBQyxVQUFEO0FBQy9DLGNBQUE7VUFBQSxTQUFBLEdBQVksa0JBQUEsQ0FBbUIsQ0FBQyxLQUFBLElBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUF0QixJQUE4QixFQUEvQixDQUFrQyxDQUFDLFdBQW5DLENBQUEsQ0FBbkI7VUFDWixJQUFHLFNBQUEsS0FBYSxNQUFNLENBQUMsaUJBQXZCO0FBQ0UsbUJBREY7O1VBRUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFYLEdBQWtCLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBWCxJQUFtQjtVQUNyQyxPQUFBLEdBQVU7VUFDVixPQUFPLENBQUMsT0FBUixDQUFnQixVQUFoQixFQUE0QixTQUFDLEdBQUQ7QUFDMUIsZ0JBQUE7WUFBQSxJQUFBLENBQUEsQ0FBYyxHQUFHLENBQUMsS0FBSixJQUFjLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBeEIsSUFBbUMsQ0FBQyxNQUFNLENBQUMsZ0JBQWlCLENBQUEsR0FBRyxDQUFDLEtBQUosQ0FBMUUsQ0FBQTtBQUFBLHFCQUFBOztZQUNBLE1BQU0sQ0FBQyxnQkFBaUIsQ0FBQSxHQUFHLENBQUMsS0FBSixDQUF4QixHQUFxQztZQUNyQyxTQUFBLEdBQVksR0FBRyxDQUFDO1lBRWhCLENBQUEsR0FBSSxNQUFNLENBQUMsT0FBUCxDQUFlLEdBQUcsQ0FBQyxLQUFuQixFQUEwQixJQUExQixDQUNKLENBQUMsSUFERyxDQUNFLFNBQUMsR0FBRDtBQUNKLGtCQUFBO2NBQUEsUUFBQSxHQUFXO2dCQUFFLFNBQUEsRUFBVyxTQUFiOztjQUNYLGFBQUEsR0FBZ0I7Y0FDaEIsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsR0FBRyxDQUFDLEtBQXBCLEVBQTJCLFNBQUMsSUFBRDtBQUN6QixvQkFBQTtnQkFBQSxJQUFBLEdBQU8sUUFBQSxDQUFTLElBQUksQ0FBQyxJQUFkO2dCQUNQLElBQUcsQ0FBQyxLQUFBLENBQU0sSUFBTixDQUFELElBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVQsS0FBcUIsTUFBckIsSUFBa0MsQ0FBQyxDQUFBLENBQUEsSUFBSyxJQUFMLElBQUssSUFBTCxHQUFZLFFBQVEsQ0FBQyxRQUFyQixDQUFELENBQW5DLENBQXBCO2tCQUNFLFFBQVEsQ0FBQyxRQUFULEdBQW9CLEtBRHRCOztnQkFFQSxJQUFHLFFBQVEsQ0FBQyxHQUFULEtBQWdCLE1BQWhCLElBQThCLFFBQUEsQ0FBUyxJQUFJLENBQUMsR0FBZCxDQUFBLEdBQXFCLENBQXREO2tCQUNFLFFBQVEsQ0FBQyxHQUFULEdBQWUsSUFBSSxDQUFDLElBRHRCOztnQkFFQSxJQUFHLFFBQVEsQ0FBQyxHQUFULEtBQWdCLE1BQWhCLElBQThCLFFBQUEsQ0FBUyxJQUFJLENBQUMsR0FBZCxDQUFBLEdBQXFCLENBQXREO2tCQUNFLFFBQVEsQ0FBQyxHQUFULEdBQWUsSUFBSSxDQUFDLElBRHRCOztBQUVBLHdCQUFPLElBQUksQ0FBQyxJQUFaO0FBQUEsdUJBQ08sT0FEUDtvQkFFSSxRQUFRLENBQUMsS0FBVCxHQUFpQixJQUFJLENBQUM7b0JBQ3RCLFFBQVEsQ0FBQyxRQUFULEdBQW9CLFFBQVEsQ0FBQyxHQUFULENBQWEsSUFBSSxDQUFDLEdBQWxCLENBQXNCLENBQUMsUUFBdkIsQ0FBQTtBQUZqQjtBQURQLHVCQUlPLE1BSlA7b0JBS0ksUUFBUSxDQUFDLElBQVQsR0FBZ0IsSUFBSSxDQUFDO0FBRGxCO0FBSlAsdUJBTU8sVUFOUDtvQkFPSSxRQUFRLENBQUMsUUFBVCxHQUFvQixJQUFJLENBQUM7b0JBQ3pCLElBQTRCLENBQUMsUUFBUSxDQUFDLElBQXRDO3NCQUFBLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBQUksQ0FBQyxJQUFyQjs7QUFGRztBQU5QLHVCQVNPLFNBVFA7QUFBQSx1QkFTa0IsaUJBVGxCO29CQVVJLFFBQVEsQ0FBQyxPQUFULEdBQW1CLElBQUksQ0FBQztBQURWO0FBVGxCLHVCQVdPLEtBWFA7b0JBWUksSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVQsQ0FBaUIsY0FBakIsQ0FBQSxHQUFtQyxDQUFDLENBQXZDO3NCQUNFLFFBQVEsQ0FBQyxPQUFULEdBQW1CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBVCxDQUFlLGNBQWYsQ0FBK0IsQ0FBQSxDQUFBLEVBRHBEOztvQkFFQSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBVCxDQUFpQixlQUFqQixDQUFBLEdBQW9DLENBQUMsQ0FBeEM7c0JBQ0UsUUFBUSxDQUFDLFFBQVQsR0FBb0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsZUFBZixDQUFnQyxDQUFBLENBQUEsRUFEdEQ7O29CQUVBLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGtCQUFqQixDQUFBLEdBQXVDLENBQUMsQ0FBM0M7c0JBQ0UsUUFBUSxDQUFDLFVBQVQsR0FBc0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsa0JBQWYsQ0FBbUMsQ0FBQSxDQUFBLEVBRDNEOztBQWhCSjtnQkFrQkEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxPQUE1QixDQUFvQyxJQUFJLENBQUMsSUFBekM7Z0JBQ1IsSUFBRyxDQUFDLFFBQVEsQ0FBQyxNQUFiO2tCQUNFLFFBQVEsQ0FBQyxNQUFULEdBQWtCO29CQUFFLElBQUEsRUFBTSxJQUFJLENBQUMsSUFBYjtvQkFBbUIsS0FBQSxFQUFPLElBQUksQ0FBQyxHQUEvQjtvQkFEcEI7O2dCQUVBLElBQUcsS0FBQSxHQUFRLENBQUMsQ0FBVCxJQUFlLEtBQUEsR0FBUSxhQUExQjtrQkFDRSxRQUFRLENBQUMsTUFBVCxHQUFrQjtvQkFBRSxJQUFBLEVBQU0sSUFBSSxDQUFDLElBQWI7b0JBQW1CLEtBQUEsRUFBTyxJQUFJLENBQUMsR0FBL0I7O2tCQUNsQixhQUFBLEdBQWdCLE1BRmxCOztnQkFHQSxJQUFHLENBQUMsUUFBUSxDQUFDLFFBQWI7eUJBQ0UsUUFBUSxDQUFDLFFBQVQsR0FBb0IsUUFBUSxDQUFDLEdBQVQsQ0FBYSxJQUFJLENBQUMsR0FBbEIsQ0FBc0IsQ0FBQyxRQUF2QixDQUFBLEVBRHRCOztjQWhDeUIsQ0FBM0I7Y0FrQ0EsSUFBRyxDQUFDLFFBQVEsQ0FBQyxJQUFiO2dCQUNFLFFBQVEsQ0FBQyxJQUFULEdBQWdCLEdBQUcsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFFLENBQUMsSUFEL0I7O2NBRUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBaEIsQ0FBcUIsUUFBckI7cUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBbkIsR0FBNEI7WUF4Q3hCLENBREY7bUJBMENKLE9BQU8sQ0FBQyxJQUFSLENBQWEsQ0FBYjtVQS9DMEIsQ0FBNUI7VUFnREEsSUFBRyxVQUFVLENBQUMsTUFBWCxHQUFvQixDQUF2QjtZQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBWCxHQUF1QixFQUR6Qjs7VUFFQSxJQUFHLFVBQVUsQ0FBQyxNQUFYLEdBQW9CLEtBQXZCO1lBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFYLEdBQXNCLEtBRHhCOztBQUVBLGlCQUFPLEVBQUUsQ0FBQyxHQUFILENBQU8sT0FBUDtRQTFEd0MsQ0FBMUI7QUEyRHZCLGVBQU8sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFyQixDQUEwQixTQUFBO1VBQy9CLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTttQkFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQVgsR0FBcUI7VUFBeEIsQ0FBZDtpQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO1FBRm9CLENBQTFCO01BNUVPO01BZ0ZoQixNQUFNLENBQUMsYUFBUCxHQUF1QixTQUFDLEtBQUQ7QUFDckIsWUFBQTtBQUFBLGdCQUFPLENBQUksS0FBSCxHQUFjLEtBQUssQ0FBQyxLQUFwQixHQUErQixDQUFDLENBQWpDLENBQVA7QUFBQSxlQUNPLEVBRFA7WUFFSSxLQUFLLENBQUMsY0FBTixDQUFBO1lBQ0EsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FBdUIsQ0FBMUI7Y0FDRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsQ0FBcUIsQ0FBQyxNQUF0QyxHQUErQztjQUMvQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUssQ0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FBdUIsQ0FBdkIsQ0FBeUIsQ0FBQyxNQUExQyxHQUFtRDtjQUNuRCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FIRjs7bUJBSUEsUUFBQSxDQUFTLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQUEsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQTlDLENBQVQ7QUFQSixlQVFPLEVBUlA7WUFTSSxLQUFLLENBQUMsY0FBTixDQUFBO1lBQ0EsSUFBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVgsR0FBdUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFoQixJQUEwQixDQUEzQixDQUFBLEdBQWdDLENBQTFEO2NBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLENBQXFCLENBQUMsTUFBdEMsR0FBK0M7Y0FDL0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLEdBQXVCLENBQXZCLENBQXlCLENBQUMsTUFBMUMsR0FBbUQ7Y0FDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYLEdBSEY7O21CQUlBLFFBQUEsQ0FBUyxRQUFRLENBQUMsY0FBVCxDQUF3QixRQUFBLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUE5QyxDQUFUO0FBZEosZUFlTyxFQWZQO1lBZ0JJLEtBQUssQ0FBQyxjQUFOLENBQUE7WUFDQSxFQUFBLEdBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFYO21CQUNyQixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO2NBQUUsSUFBQSxFQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBbEI7Y0FBd0IsS0FBQSxFQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBekM7YUFBN0I7QUFsQkosZUFtQk8sQ0FBQyxDQW5CUjtZQW9CSSxZQUFBLENBQWEsTUFBTSxDQUFDLEtBQXBCO1lBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO21CQUNwQixNQUFNLENBQUMsTUFBUCxDQUFBO0FBdEJKLGVBdUJPLEVBdkJQO0FBQUEsZUF1QlcsRUF2Qlg7QUFBQSxlQXVCZSxFQXZCZjtBQUFBLGVBdUJtQixFQXZCbkI7QUFBQSxlQXVCdUIsRUF2QnZCO0FBQUEsZUF1QjJCLEVBdkIzQjtBQXVCMkI7QUF2QjNCO1lBeUJJLEVBQUEsR0FBSyxPQUFPLENBQUMsT0FBUixDQUFnQixLQUFLLENBQUMsYUFBdEI7WUFDTCxZQUFBLENBQWEsTUFBTSxDQUFDLEtBQXBCO1lBQ0EsSUFBQSxHQUFPLFVBQUEsQ0FBVyxDQUFDLFNBQUE7Y0FDakIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLEVBQUUsQ0FBQyxHQUFILENBQUE7Y0FDcEIsTUFBTSxDQUFDLE1BQVAsQ0FBQTtZQUZpQixDQUFELENBQVgsRUFJSixHQUpJO1lBS1AsTUFBTSxDQUFDLEtBQVAsR0FBZTtBQUNmO0FBakNKO01BRHFCO2FBb0N2QixNQUFNLENBQUMsb0JBQVAsR0FBOEIsU0FBQyxJQUFEO1FBQzVCLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsRUFBNkI7VUFBRSxJQUFBLEVBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFwQjtVQUEwQixLQUFBLEVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUE3QztTQUE3QjtlQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQjtNQUZRO0lBbGxCaEMsQ0FmNkQ7R0FBL0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAnY29uZmlnJyxcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICckdWliTW9kYWwnXG4gICckd2luZG93J1xuICAnJHEnXG5cbiAgIydBdXRoZW50aWNhdGlvbidcbiAgIydNZW51cydcbiAgIydQZXJzb25hJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSkgLT4gIyBBdXRoZW50aWNhdGlvbiwgTWVudXMsIFBlcnNvbmFcbiAgICAjIyNcbiAgICBQZXJzb25hLndhdGNoXG4gICAgICBsb2dnZWRJblVzZXI6IEF1dGhlbnRpY2F0aW9uLnVzZXIuZW1haWxcbiAgICAgIG9ubG9naW46IChhc3NlcnRpb24pIC0+XG4gICAgICAgICRodHRwLnBvc3QoJy9hdXRoL3BlcnNvbmEnLCBhc3NlcnRpb246IGFzc2VydGlvbikudGhlbiAtPlxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgIyBGSVhNRVxuICAgICAgICAgICAgICAgICAgICAgICAgb25sb2dvdXQ6IC0+XG4gICAgIyMjXG5cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUubG9jYWxNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsICRzY29wZS5sb2NhbE1lc3NhZ2VzKVxuXG4gICAgJHNjb3BlLm5vZGVJbmZvID0geyBrZXlJRDogbnVsbCB9XG4gICAgJHNjb3BlLmlwZnNTdG9yYWdlID0ge31cblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIGlmIEFycmF5LmlzQXJyYXkoaWQpXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWRbMF0pICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkWzFdKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLm5hbWUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbClcblxuICAgICRzY29wZS5sb2dpbldpdGhLZXkgPSAocHJpdmF0ZUtleVBFTSkgLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gS0VZVVRJTC5nZXRLZXlGcm9tUGxhaW5Qcml2YXRlUEtDUzhQRU0ocHJpdmF0ZUtleVBFTSlcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBuZXcgS0pVUi5jcnlwdG8uRUNEU0EoeydjdXJ2ZSc6ICdzZWNwMjU2azEnLCAncHViJzogJHNjb3BlLnByaXZhdGVLZXkucHViS2V5SGV4fSlcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdwcml2YXRlS2V5UEVNJywgcHJpdmF0ZUtleVBFTSlcbiAgICAgIHB1YmxpY0tleUhleCA9IEtFWVVUSUwuZ2V0SGV4RnJvbVBFTShLRVlVVElMLmdldFBFTSgkc2NvcGUucHVibGljS2V5KSlcbiAgICAgIHB1YmxpY0tleUhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYocHVibGljS2V5SGV4KSlcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID1cbiAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgIGlkVmFsdWU6IHB1YmxpY0tleUhhc2hcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgncHJpdmF0ZUtleVBFTScpXG4gICAgaWYgcHJpdmF0ZUtleVxuICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShwcml2YXRlS2V5KVxuICAgIHRva2VuID0gJGxvY2F0aW9uLnNlYXJjaCgpLnRva2VuXG4gICAgaWYgdG9rZW5cbiAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5wYXJzZSh0b2tlbikucGF5bG9hZE9ialxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuID0gdG9rZW5cbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID0gandzLnVzZXJcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgcHJldmlvdXNTdGF0ZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdzdGF0ZScpIHx8ICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICBwcmV2aW91c1N0YXRlUGFyYW1zID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRlUGFyYW1zJykgfHwge31cbiAgICAgICRzdGF0ZS5nbyhwcmV2aW91c1N0YXRlLCBwcmV2aW91c1N0YXRlUGFyYW1zKVxuICAgIGVsc2VcbiAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJylcbiAgICAgIGlmIHRva2VuXG4gICAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5wYXJzZSh0b2tlbikucGF5bG9hZE9ialxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlblxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9IGp3cy51c2VyXG5cbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPSB7IGxpc3Q6IFtdIH1cbiAgICAkc2NvcGUucGhvbmVSZWdleCA9IC9eXFwrP1xcZCskL1xuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIEVYUEVSSU1FTlRBTDoge1xuICAgICAgICBwdWJzdWI6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdGFydDogdHJ1ZVxuICAgICAgcmVwbzogJ2lwZnMtdGVzdGluZydcbiAgICAgIGNvbmZpZzogQm9vdHN0cmFwOiBbXG4gICAgICAgICcvZG5zNC9hbXMtMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xlcjI2NU5SZ1NwMkxBM2RQYWV5a2lTMUo2RGlmVEM4OGY1dVZRS05BZCdcbiAgICAgICAgJy9kbnM0L3Nmby0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTGp1Nm03eFRoM0R1b2t2VDM4ODZRUllxeEF6YjFrU2hhYW5KZ1czNnl4J1xuICAgICAgICAnL2RuczQvbG9uLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MTWVXcUI3WUdWTEpOM3BOTFFwbW1FazM1djZ3WXRzTUdMelNyNVFCVTMnXG4gICAgICAgICcvZG5zNC9zZm8tMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xuU0djY0Z1WlFKelJhZEhuOTVXMkNyU0ZtWnVUZERXUDhIWGFIY2E5eidcbiAgICAgICAgJy9kbnM0L3Nmby0zLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFBwcHVCdFFTR3dLRFpUMk03M1VMcGp2ZmQzYVo2aGE0b0ZHTDFLckdNJ1xuICAgICAgICAnL2RuczQvc2dwLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MU2FmVE1Cc1BLYWRURWdhWGN0RFFWY3FOODhDTkxIWE1rVE53TUtQbnUnXG4gICAgICAgICcvZG5zNC9ueWMtMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0x1ZVI0eEJlVWJZOVdaOXhHVVV4dW5iS1djck5GVERBYWRRSm1vY25XbSdcbiAgICAgICAgJy9kbnM0L255Yy0yLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFY0QmJtNTFqTTlDNGdEWVpROUN5M1U2YVhNSkRBYnpndTJmemFEczY0J1xuICAgICAgXSlcblxuICAgICMgR2V0IHBvc3NpYmxlIGxvZ2luIG9wdGlvbnNcbiAgICAkaHR0cC5nZXQoJy9hcGknLCB7IHRpbWVvdXQ6IDIwMDAgfSlcbiAgICAudGhlbiAocmVzKSAtPlxuICAgICAgJHNjb3BlLm5vZGVJbmZvID0gYW5ndWxhci5leHRlbmQgJHNjb3BlLm5vZGVJbmZvLCByZXMuZGF0YVxuICAgICwgKGVycikgLT5cbiAgICAgICRzY29wZS5ub2RlSW5mbyA9IHsgbG9naW5PcHRpb25zOiBbdHJ1ZV0sIGtleUlEOiBudWxsIH1cblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICBjb25zb2xlLmxvZyAkc2NvcGUuaXBmc1xuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcbiAgICAgICRzY29wZS5pcGZzLnB1YnN1Yi5zdWJzY3JpYmUgJ2lkZW50aWZpJywgKG1zZykgLT5cbiAgICAgICAgbXNnID0geyBqd3M6ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihtc2cuZGF0YSkudG9TdHJpbmcoKSB9XG4gICAgICAgIGhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYobXNnLmp3cykpXG4gICAgICAgIGNvbnNvbGUubG9nICdpZGVudGlmaSBtZXNzYWdlIHJlY2VpdmVkJywgbXNnLCBoYXNoXG4gICAgICAgIGxvY2FsTWVzc2FnZXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoW21zZ10pXG4gICAgICAgIGxvY2FsTWVzc2FnZXNbaGFzaF3CoD0gbXNnXG4gICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgbG9jYWxNZXNzYWdlcylcbiAgICAgICMkc2NvcGUuaW5pdElwZnNJbmRleGVzKClcblxuICAgICRzY29wZS5pbml0SXBmc0luZGV4ZXMgPSAtPlxuICAgICAgaW5kZXhSb290ID0gJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXG4gICAgICBjb25zb2xlLmxvZyAnTG9hZGluZyBpbmRleCBmcm9tIGh0dHBzOi8vaWRlbnRpLmZpOicsIGluZGV4Um9vdFxuICAgICAgJHNjb3BlLmlwZnNTdG9yYWdlID0gbmV3ICR3aW5kb3cubWVya2xlQnRyZWUuSVBGU0dhdGV3YXlTdG9yYWdlKCdodHRwczovL2lkZW50aS5maScpXG4gICAgICAkcS5hbGwoW1xuICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChpbmRleFJvb3QgKyAnL2lkZW50aXRpZXNfYnlfZGlzdGFuY2UnLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChpbmRleFJvb3QgKyAnL2lkZW50aXRpZXNfYnlfc2VhcmNoa2V5JywgJHNjb3BlLmlwZnNTdG9yYWdlKSxcbiAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goaW5kZXhSb290ICsgJy9tZXNzYWdlc19ieV90aW1lc3RhbXAnLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgXSlcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ0xvYWRpbmcgaW5kZXggZnJvbSBodHRwczovL2lkZW50aS5maSBmYWlsZWQnLCBlXG4gICAgICAgIGNvbnNvbGUubG9nICdMb2FkaW5nIGluZGV4IGZyb20gaXBmcy5pbydcbiAgICAgICAgJHNjb3BlLmlwZnNTdG9yYWdlID0gbmV3ICR3aW5kb3cubWVya2xlQnRyZWUuSVBGU0dhdGV3YXlTdG9yYWdlKCdodHRwczovL2lwZnMuaW8nKVxuICAgICAgICAkcS5hbGwoW1xuICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKGluZGV4Um9vdCArICcvaWRlbnRpdGllc19ieV9kaXN0YW5jZScsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goaW5kZXhSb290ICsgJy9pZGVudGl0aWVzX2J5X3NlYXJjaGtleScsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goaW5kZXhSb290ICsgJy9tZXNzYWdlc19ieV90aW1lc3RhbXAnLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICBdKVxuICAgICAgLnRoZW4gKHJlc3VsdHMpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCByZXN1bHRzXG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlEaXN0YW5jZSA9IHJlc3VsdHNbMF1cbiAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleSA9IHJlc3VsdHNbMV1cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VJbmRleCA9IHJlc3VsdHNbMl1cbiAgICAgICAgJHNjb3BlLmFwaVJlYWR5ID0gdHJ1ZVxuXG4gICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaWRlbnRpLmZpJyArIGluZGV4Um9vdCArICcvaW5mbydcbiAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaXBmcy5pbycgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICAkc2NvcGUubm9kZUluZm8ucHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzLmRhdGEsIFsna2V5SUQnLCByZXMuZGF0YS5rZXlJRF0pXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSWRlbnRpZmknXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgZ2V0SnNvbikgLT5cbiAgICAgIGpzSXBmc0dldCA9IC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdHZXR0aW5nIGZyb20ganMtaXBmcycsIHVyaVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5jYXQodXJpKS50aGVuIChzdHJlYW0pIC0+XG4gICAgICAgICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgICAgIHN0cmVhbS5vbiAnZGF0YScsIChmaWxlKSAtPlxuICAgICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZSkgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgICAgICBzdHJlYW0ub24gJ2Vycm9yJywgKGVycm9yKSAtPlxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG5cbiAgICAgIGlmICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHVyaSlcbiAgICAgICAgLnRoZW4gKHJlcykgLT4gcmVzLmRhdGFcbiAgICAgICAgLmNhdGNoIC0+IGpzSXBmc0dldCgpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBqc0lwZnNHZXQoKVxuXG4gICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgcmF0aW5nOiAxXG4gICAgICBjb21tZW50OiAnJ1xuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIHBhcmFtcywgaWQpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlID1cbiAgICAgICAgY29udGV4dDogJ2lkZW50aWZpJ1xuXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLFxuICAgICAgICAgIG1heFJhdGluZzogM1xuICAgICAgICAgIG1pblJhdGluZzogLTNcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kIG1lc3NhZ2UsIHBhcmFtc1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgICBpZiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICBwdWJsaWNLZXlIZXggPSBLRVlVVElMLmdldEhleEZyb21QRU0oS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSkpXG4gICAgICAgIHB1YmxpY0tleUhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYocHVibGljS2V5SGV4KSlcbiAgICAgICAgbWVzc2FnZS5hdXRob3IgPSBbWydrZXlJRCcsIHB1YmxpY0tleUhhc2hdXVxuICAgICAgICBtZXNzYWdlLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBoZWFkZXIgPSBKU09OLnN0cmluZ2lmeSh7IGFsZzogJ0VTMjU2Jywga2lkOiBwdWJsaWNLZXlIZXggfSlcbiAgICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5zaWduKFwiRVMyNTZcIiwgaGVhZGVyLCBwYXlsb2FkLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgaGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1Nihqd3MpKVxuICAgICAgICBtZXNzYWdlID0geyBqd3M6IGp3cywgaGFzaDogaGFzaCB9XG4gICAgICAgICRzY29wZS5pcGZzLmZpbGVzLmFkZChuZXcgJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGp3cykpLnRoZW4gKGkpIC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMucHVic3ViLnB1Ymxpc2goJ2lkZW50aWZpJywgbmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKVxuICAgICAgZWxzZVxuICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICBoZWFkZXJzOlxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW5cblxuICAgICAgJGh0dHAucG9zdCgnL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICAuY2F0Y2ggLT5cbiAgICAgICAgJGh0dHAucG9zdCgnaHR0cHM6Ly9pZGVudGkuZmkvYXBpL21lc3NhZ2VzJywgbWVzc2FnZSwgb3B0aW9ucylcbiAgICAgIC50aGVuICgocmVzcG9uc2UpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIHJlc3BvbnNlXG4gICAgICAgICMgQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2UuY29tbWVudCA9ICcnXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnJhdGluZyA9IDFcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgICRzY29wZS4kcm9vdC4kYnJvYWRjYXN0ICdNZXNzYWdlQWRkZWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgJHNjb3BlLmdldElwZnNJbmRleGVzICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyByZXNwb25zZS5kYXRhLmlwZnNJbmRleFJvb3QgaWYgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICksIChlcnJvclJlc3BvbnNlKSAtPlxuICAgICAgICAkc2NvcGUuZXJyb3IgPSBlcnJvclJlc3BvbnNlLmRhdGEgfHwgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXNwb25zZSlcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgIGtleXBhaXIgPSBLRVlVVElMLmdlbmVyYXRlS2V5cGFpcignRUMnLCAnc2VjcDI1NmsxJylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5cGFpci5wcnZLZXlPYmpcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBrZXlwYWlyLnB1YktleU9ialxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlQRU0gPSBLRVlVVElMLmdldFBFTSgkc2NvcGUucHJpdmF0ZUtleSwgJ1BLQ1M4UFJWJylcblxuICAgICRzY29wZS5kb3dubG9hZEtleSA9IC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkoJHNjb3BlLnByaXZhdGVLZXlQRU0pXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVBFTSA9ICcnXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5jbGVhckFsbCgpXG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMubGlzdCcpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IG51bGxcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBudWxsXG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKHZhbHVlLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gdmFsdWUuZGF0YSBvciB2YWx1ZS5zaWduZWREYXRhXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID09IDAgYW5kIHR5cGVvZiB2YWx1ZS5kaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmRpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5sb2dvQ2xpY2tlZCA9IC0+XG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0J1xuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuZGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLnByb2ZpbGVGcm9tRGF0YSA9IChkYXRhLCBmYWxsYmFja0lkKSAtPlxuICAgICAgaWYgZGF0YS5hdHRycyBhbmQgZGF0YS5hdHRycy5sZW5ndGhcbiAgICAgICAgZGF0YS5kaXN0ID0gZGF0YS5hdHRyc1swXS5kaXN0ICsgMFxuICAgICAgICBkYXRhLnBvcyA9IGRhdGEuYXR0cnNbMF0ucG9zXG4gICAgICAgIGRhdGEubmVnID0gZGF0YS5hdHRyc1swXS5uZWdcbiAgICAgICAgZm9yIGssIHYgb2YgZGF0YS5hdHRyc1xuICAgICAgICAgIHN3aXRjaCB2Lm5hbWVcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgIGRhdGEubmFtZSA9IHYudmFsIHVubGVzcyBkYXRhLm5hbWVcbiAgICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgICBkYXRhLm5pY2tuYW1lID0gdi52YWwgdW5sZXNzIGRhdGEubmlja25hbWVcbiAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICBkYXRhLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KHYudmFsKS50b1N0cmluZygpXG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5pY2tuYW1lIGlmIGRhdGEubmlja25hbWUgYW5kIG5vdCBkYXRhLm5hbWVcbiAgICAgIGRhdGEubmFtZSA9IGZhbGxiYWNrSWQudmFsdWUgdW5sZXNzIGRhdGEubmFtZVxuICAgICAgZGF0YS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShmYWxsYmFja0lkLnZhbHVlKS50b1N0cmluZygpIHVubGVzcyBkYXRhLmdyYXZhdGFyXG4gICAgICByZXR1cm4gZGF0YVxuXG4gICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSA9IChpZCwgY2FsbGJhY2spIC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdGllc0J5U2VhcmNoS2V5LnNlYXJjaFRleHQoZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbHVlKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZC50eXBlKSwgMSlcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIGlmIHJlcy5sZW5ndGhcbiAgICAgICAgICByZXR1cm4gJHNjb3BlLmlwZnNHZXQocmVzWzBdLnZhbHVlLCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICByZXR1cm4geyBkYXRhOiByZXMgfVxuICAgICAgICAgICMgcmV0dXJuICRodHRwLmdldCgkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCArICcvaXBmcy8nICsgcmVzWzBdLnZhbHVlKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHsgZGF0YToge30gfVxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgcHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzLmRhdGEsIGlkKVxuICAgICAgICBpZiBjYWxsYmFja1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayhwcm9maWxlKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIHByb2ZpbGVcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuaGFzVmFsaWRTaWduYXR1cmUobWVzc2FnZSlcbiAgICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgeyB0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkIH0sIChwcm9maWxlKSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG4gICAgICBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICBtb2RhbEluc3RhbmNlLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgbW9kYWxJbnN0YW5jZS5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgIyMjXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0gQXV0aGVudGljYXRpb25cbiAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyID09ICdwZXJzb25hJ1xuICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSA9ICdlbWFpbCdcbiAgICAgIGVsc2VcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAndXJsJ1xuICAgICAgc3dpdGNoIEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJcbiAgICAgICAgd2hlbiAncGVyc29uYSdcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLmVtYWlsXG4gICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIEF1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9IEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJEYXRhLmxpbmtcbiAgICAgICAgICBicmVha1xuICAgICMjI1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLmhhc1ZhbGlkU2lnbmF0dXJlID0gKG1zZywgcGFyc2VkSndzKSAtPlxuICAgICAgcGFyc2VkSndzID0gcGFyc2VkSndzIG9yIEtKVVIuandzLkpXUy5wYXJzZShtc2cuandzKVxuICAgICAgcGVtID0gS0pVUi5hc24xLkFTTjFVdGlsLmdldFBFTVN0cmluZ0Zyb21IZXgocGFyc2VkSndzLmhlYWRlck9iai5raWQsIFwiUFVCTElDIEtFWVwiKVxuICAgICAgcHViS2V5ID0gS0VZVVRJTC5nZXRLZXkocGVtKVxuICAgICAgaXNWYWxpZCA9IEtKVVIuandzLkpXUy52ZXJpZnkobXNnLmp3cywgcHViS2V5LCBbJ0VTMjU2J10pXG4gICAgICBpZiBpc1ZhbGlkIHRoZW4gY29uc29sZS5sb2cgJ3ZhbGlkIHNpZ25hdHVyZScgZWxzZSBjb25zb2xlLmVycm9yICdpbnZhbGlkIHNpZ25hdHVyZSdcbiAgICAgIHJldHVybiBpc1ZhbGlkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zLCB2ZXJpZnlTaWduYXR1cmUpIC0+XG4gICAgICBwcm9jZXNzTWVzc2FnZSA9IChtc2cpIC0+XG4gICAgICAgIHBhcnNlZEp3cyA9IEtKVVIuandzLkpXUy5wYXJzZShtc2cuandzKVxuICAgICAgICBtc2cuZGF0YSA9IHBhcnNlZEp3cy5wYXlsb2FkT2JqXG4gICAgICAgIHVubGVzcyBtc2cuc2lnbmVyX2tleWlkXG4gICAgICAgICAga2V5SGFzaCA9IENyeXB0b0pTLlNIQTI1NihwYXJzZWRKd3MuaGVhZGVyT2JqLmtpZClcbiAgICAgICAgICBtc2cuc2lnbmVyX2tleWlkID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoa2V5SGFzaClcblxuICAgICAgICByZXR1cm4gaWYgdmVyaWZ5U2lnbmF0dXJlIGFuZCBub3QgJHNjb3BlLmhhc1ZhbGlkU2lnbmF0dXJlKG1zZywgcGFyc2VkSndzKSAjIFRPRE86IHNob3VsZCBkaXNwbGF5IHdhcm5pbmcgb3IgaGlkZSBtc2cgb3Igc3RoXG5cbiAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JfZW1haWwgfHwgbXNnLmRhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbMF1cbiAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEuYXV0aG9yLmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEuYXV0aG9yW2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yW2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBtc2cuZGF0YS5hdXRob3JbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5kYXRhLmF1dGhvcltpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50WzBdXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5yZWNpcGllbnQubGVuZ3RoXG4gICAgICAgICAgaW5kZXggPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZihtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0pXG4gICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1cbiAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmRhdGEucmVjaXBpZW50W2ldWzFdXG4gICAgICAgICAgaSsrXG4gICAgICAgIHNpZ25lZERhdGEgPSBtc2cuZGF0YVxuICAgICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgICBtc2cuaWNvblN0eWxlID0gJydcbiAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnJ1xuICAgICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgICAgc3dpdGNoIHNpZ25lZERhdGEudHlwZVxuICAgICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ2Nvbm5lY3Rpb24nXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2sgcG9zaXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtZXJyb3InXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgICByYXRpbmcgPSBzaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChzaWduZWREYXRhLm1pblJhdGluZyArIHNpZ25lZERhdGEubWF4UmF0aW5nKSAvIDJcbiAgICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nIC0gMC41KSAvIG1heFJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93biBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbmV1dHJhbCdcblxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBpZiBtc2cuaXBmc19oYXNoIGFuZCBub3QgbXNnLmp3c1xuICAgICAgICAgICRzY29wZS5pcGZzR2V0KG1zZy5pcGZzX2hhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIG1zZy5qd3MgPSByZXNcbiAgICAgICAgICAgIHByb2Nlc3NNZXNzYWdlKG1zZylcbiAgICAgICAgZWxzZSBwcm9jZXNzTWVzc2FnZShtc2cpXG5cbiAgICAjIENvbGxhcHNpbmcgdGhlIG1lbnUgYWZ0ZXIgbmF2aWdhdGlvblxuICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcblxuICAgIHNjcm9sbFRvID0gKGVsKSAtPlxuICAgICAgaWYgIWVsXG4gICAgICAgIHJldHVyblxuICAgICAgcG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGlmIHBvcy50b3BcbiAgICAgICAgaWYgcG9zLnRvcCAtIDYwIDwgJHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLnRvcCAtIDYwXG4gICAgICAgIGVsc2UgaWYgcG9zLmJvdHRvbSA+ICR3aW5kb3cucGFnZVlPZmZzZXQgKyAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLmJvdHRvbSAtICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgMTVcbiAgICAgIHJldHVyblxuXG4gICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSBudWxsXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICAkc2NvcGUuaWRzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICBzZWFyY2hLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5wcmV2aW91c1NlYXJjaEtleVxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2ggPSB7fVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDUwXG4gICAgICBjdXJzb3IgPSBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgaWYgc2VhcmNoS2V5Lmxlbmd0aFxuICAgICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5pZGVudGl0aWVzQnlTZWFyY2hLZXkuc2VhcmNoVGV4dChzZWFyY2hLZXksIGxpbWl0LCBjdXJzb3IpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aXRpZXNCeURpc3RhbmNlLnNlYXJjaFRleHQoc2VhcmNoS2V5LCBsaW1pdCwgY3Vyc29yKVxuICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuc2VhcmNoUmVxdWVzdC50aGVuIChpZGVudGl0aWVzKSAtPlxuICAgICAgICBzZWFyY2hLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICAgcmV0dXJuICMgc2VhcmNoIGtleSBjaGFuZ2VkXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdCBvciBbXVxuICAgICAgICBxdWVyaWVzID0gW11cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoIGlkZW50aXRpZXMsIChyb3cpIC0+XG4gICAgICAgICAgcmV0dXJuIHVubGVzcyByb3cudmFsdWUgYW5kIHJvdy52YWx1ZS5sZW5ndGggYW5kICEkc2NvcGUuaWRlbnRpdGllc0J5SGFzaFtyb3cudmFsdWVdXG4gICAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2hbcm93LnZhbHVlXSA9IHRydWVcbiAgICAgICAgICBzZWFyY2hLZXkgPSByb3cua2V5XG4gICAgICAgICAgIyBwID0gJGh0dHAuZ2V0KCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyByb3cudmFsdWUpXG4gICAgICAgICAgcCA9ICRzY29wZS5pcGZzR2V0KHJvdy52YWx1ZSwgdHJ1ZSlcbiAgICAgICAgICAudGhlbiAocm93KSAtPlxuICAgICAgICAgICAgaWRlbnRpdHkgPSB7IHNlYXJjaEtleTogc2VhcmNoS2V5IH1cbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2ggcm93LmF0dHJzLCAoYXR0cikgLT5cbiAgICAgICAgICAgICAgZGlzdCA9IHBhcnNlSW50KGF0dHIuZGlzdClcbiAgICAgICAgICAgICAgaWYgIWlzTmFOKGRpc3QpIGFuZCAoaWRlbnRpdHkuZGlzdGFuY2UgPT0gdW5kZWZpbmVkIG9yICgwIDw9IGRpc3QgPCBpZGVudGl0eS5kaXN0YW5jZSkpXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkuZGlzdGFuY2UgPSBkaXN0XG4gICAgICAgICAgICAgIGlmIGlkZW50aXR5LnBvcyA9PSB1bmRlZmluZWQgYW5kIHBhcnNlSW50KGF0dHIucG9zKSA+IDBcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5wb3MgPSBhdHRyLnBvc1xuICAgICAgICAgICAgICBpZiBpZGVudGl0eS5uZWcgPT0gdW5kZWZpbmVkIGFuZCBwYXJzZUludChhdHRyLm5lZykgPiAwXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkubmVnID0gYXR0ci5uZWdcbiAgICAgICAgICAgICAgc3dpdGNoIGF0dHIubmFtZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuZW1haWwgPSBhdHRyLnZhbFxuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoYXR0ci52YWwpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkubmFtZSA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5uaWNrbmFtZSA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5uYW1lID0gYXR0ci52YWwgaWYgIWlkZW50aXR5Lm5hbWVcbiAgICAgICAgICAgICAgICB3aGVuICdiaXRjb2luJywgJ2JpdGNvaW5fYWRkcmVzcydcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5LmJpdGNvaW4gPSBhdHRyLnZhbFxuICAgICAgICAgICAgICAgIHdoZW4gJ3VybCdcbiAgICAgICAgICAgICAgICAgIGlmIGF0dHIudmFsLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkudHdpdHRlciA9IGF0dHIudmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgICAgaWYgYXR0ci52YWwuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuZmFjZWJvb2sgPSBhdHRyLnZhbC5zcGxpdCgnZmFjZWJvb2suY29tLycpWzFdXG4gICAgICAgICAgICAgICAgICBpZiBhdHRyLnZhbC5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5nb29nbGVQbHVzID0gYXR0ci52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKGF0dHIubmFtZSlcbiAgICAgICAgICAgICAgaWYgIWlkZW50aXR5LmxpbmtUb1xuICAgICAgICAgICAgICAgIGlkZW50aXR5LmxpbmtUbyA9IHsgdHlwZTogYXR0ci5uYW1lLCB2YWx1ZTogYXR0ci52YWwgfVxuICAgICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5saW5rVG8gPSB7IHR5cGU6IGF0dHIubmFtZSwgdmFsdWU6IGF0dHIudmFsIH1cbiAgICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgaWYgIWlkZW50aXR5LmdyYXZhdGFyXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoYXR0ci52YWwpLnRvU3RyaW5nKClcbiAgICAgICAgICAgIGlmICFpZGVudGl0eS5uYW1lXG4gICAgICAgICAgICAgIGlkZW50aXR5Lm5hbWUgPSByb3cuYXR0cnNbMF0udmFsXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3QucHVzaChpZGVudGl0eSlcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFswXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgcXVlcmllcy5wdXNoIHBcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwXG4gICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAwXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICByZXR1cm4gJHEuYWxsKHF1ZXJpZXMpXG4gICAgICByZXR1cm4gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IDBcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSAtIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXkgKyAxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgc2Nyb2xsVG8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSlcbiAgICAgICAgd2hlbiAxM1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZCA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV1cbiAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQubGlua1RvLnR5cGUsIHZhbHVlOiBpZC5saW5rVG8udmFsdWUgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8udHlwZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbHVlIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5dXG4iXX0=

(function() {
  angular.module('identifiAngular').run(function($log, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
      $rootScope.pageTitle = $state.current.title || 'Identifi';
      localStorageService.set('state', current.name);
      localStorageService.set('stateParams', $stateParams);
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFNBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsTUFBbkIsRUFBMkIsWUFBM0IsRUFBeUMsT0FBekMsRUFBa0QsbUJBQWxEO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxVQUFVLENBQUMsR0FBWCxDQUFlLHFCQUFmLEVBQXNDLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakI7TUFDcEMsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO01BQy9DLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDLE9BQU8sQ0FBQyxJQUF6QztNQUNBLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGFBQXhCLEVBQXVDLFlBQXZDO2FBQ0EsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkI7SUFKb0MsQ0FBdEM7RUFIRyxDQURQO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHdpbmRvdywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJGxvZy5kZWJ1ZyAncnVuQmxvY2sgZW5kJ1xuICAgICRyb290U2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lkZW50aWZpJ1xuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlJywgY3VycmVudC5uYW1lKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlUGFyYW1zJywgJHN0YXRlUGFyYW1zKVxuICAgICAgJHdpbmRvdy5zY3JvbGxUbygwLDApXG4iXX0=

(function() {
  angular.module('identifiAngular').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('identities', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('identities.list', {
      url: '',
      templateUrl: 'app/identities/list.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities',
      params: {
        search: ''
      },
      title: 'Identifi - Global Address Book'
    }).state('identities.create', {
      url: '/identities/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/identities/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '/messages',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Identifi - Latest messages'
    }).state('messages.show', {
      url: '/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Identifi - About'
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLGNBQUQsRUFBaUIsa0JBQWpCO0lBQ047SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVUsSUFGVjtLQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsRUFBUjtPQUxGO01BTUEsS0FBQSxFQUFPLGdDQU5QO0tBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7S0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO0tBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVLElBRlY7S0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU8sNEJBSlA7S0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxNQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7S0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPLGtCQUZQO0tBdkNKO1dBMkNBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO0VBN0NNLENBRFY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBHbG9iYWwgQWRkcmVzcyBCb29rJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9pZGVudGl0aWVzL2NyZWF0ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9jcmVhdGUuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLnNob3cnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy86dHlwZS86dmFsdWUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzJyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIExhdGVzdCBtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMuc2hvdycsXG4gICAgICAgIHVybDogJy86aWQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ2Fib3V0JyxcbiAgICAgICAgdXJsOiAnL2Fib3V0J1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2Fib3V0Lmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBBYm91dCdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('moment', moment).constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFDc0IsTUFEdEIsQ0FFRSxDQUFDLFFBRkgsQ0FFWSxRQUZaLEVBR0k7SUFBQSxjQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sSUFBTjtNQUNBLEtBQUEsRUFBTyxFQURQO01BRUEsWUFBQSxFQUFjLENBRmQ7S0FERjtJQUlBLG9CQUFBLEVBQXNCLENBQ3BCLE9BRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE9BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE9BTG9CLEVBTXBCLFNBTm9CLEVBT3BCLFNBUG9CLEVBUXBCLFdBUm9CLEVBU3BCLGlCQVRvQixDQUp0QjtHQUhKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdtb21lbnQnLCBtb21lbnRcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogbnVsbFxuICAgICAgbGltaXQ6IDUwXG4gICAgICBtYXhfZGlzdGFuY2U6IDBcbiAgICB1bmlxdWVBdHRyaWJ1dGVUeXBlczogW1xuICAgICAgJ2VtYWlsJyxcbiAgICAgICd1cmwnLFxuICAgICAgJ2tleUlEJyxcbiAgICAgICd0ZWwnLFxuICAgICAgJ3Bob25lJyxcbiAgICAgICdhY2NvdW50JyxcbiAgICAgICdiaXRjb2luJyxcbiAgICAgICdncGdfa2V5aWQnLFxuICAgICAgJ2dwZ19maW5nZXJwcmludCdcbiAgICBdXG4iXX0=

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    return $logProvider.debugEnabled(true);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRDtJQUNOO1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkbG9nUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICMgRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQgdHJ1ZVxuICAgICMgU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide="authentication.user || !nodeInfo.loginOptions.length"><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label><input type=text required autofocus id=idName name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label><input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label><input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label><input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user || !nodeInfo.loginOptions.length) || !(newEntry.email || newEntry.url || newEntry.phone) || (addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid)">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon id=result border=3 width=46 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.distance > 0" ng-bind="result.distance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.name|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <small ng-if=!result.name class=list-group-item-text><span ng-bind-html=result[0][0]|highlight:query.term></span></small><br><small><span ng-if="result.nickname && result.name != result.nickname" ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.email|highlight:query.term></span> </span><span ng-if=result.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.facebook|highlight:query.term></span> </span><span ng-if=result.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.twitter|highlight:query.term></span> </span><span ng-if=result.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.googlePlus|highlight:query.term></span> </span><span ng-if=result.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.bitcoin|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+stats.received_positive+stats.received_neutral+stats.received_negative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon id="{ gravatar: gravatar }" border=4 positive-score=stats.received_positive negative-score=stats.received_negative width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(info.name||info.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=info.name||info.nickname></span> <span ng-hide="!info.nickname || !info.name || info.nickname === info.name">(<span class=text-muted ng-bind=info.nickname></span>) </span><span ng-if="distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="distance > 0" ng-bind="distance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="stats.received_positive || stats.received_negative"><span ng-bind="stats.received_positive / (stats.received_positive+stats.received_neutral+stats.received_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.received_positive || stats.received_negative)">&mdash; </span></b><span ng-if="stats.sent_positive || stats.sent_negative"><br>Sent: <span ng-if="stats.sent_positive || stats.sent_negative"><span ng-bind="stats.sent_positive / (stats.sent_positive+stats.sent_neutral+stats.sent_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.sent_positive || stats.sent_negative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.received_positive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.received_neutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.received_negative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.sent_positive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.sent_neutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.sent_negative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && thumbsUp.length > 0" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class=no-glow border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div><div ng-if="isUniqueType && thumbsDown.length > 0" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class=no-glow border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span> <span class=visible-xs>Recv ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !receivedIndex || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.received_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.received_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.received_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that {{idType}}:{{idValue}} belongs to your already trusted identity.</p></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !sentIndex || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.sent_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.sent_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.sent_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon id=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><span class="distance-container mar-right10"><identicon id="{ gravatar: match.label.gravatar }" border=3 width=46 positive-score=match.label.pos negative-score=match.label.neg></identicon><span ng-if="match.label.distance >= 0" class=distance ng-bind="match.label.distance | ordinal"></span> </span><span ng-bind-html="match.label.name | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeyPEM ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon id=nodeInfo.profile border=3 width=35 positive-score=nodeInfo.profile.pos negative-score=nodeInfo.profile.neg></identicon></span><span ng-bind=nodeInfo.profile.name></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message msg-data=msg ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'-data.timestamp\'" ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><span class="distance-container mar-right5"><identicon id=message.verifiedBy border=3 width=35 positive-score=message.verifiedBy.pos negative-score=message.verifiedBy.neg></identicon><span ng-if="message.verifiedBy.dist >= 0" class=distance ng-bind="message.verifiedBy.dist | ordinal"></span> </span><span ng-bind=message.verifiedBy.name></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.data.type == \'verify_identity\'}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': $ctrl.msgData.data.type != \'verify_identity\', \'panel-heading\': $ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\' }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><span class="distance-container mar-right10"><identicon id=$ctrl.msgData border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-if="$ctrl.msgData.distance >= 0" class=distance ng-bind="$ctrl.msgData.distance | ordinal"></span> </span><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\'"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.data.type == \'verify_identity\'"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.data.type == \'unverify_identity\'"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);