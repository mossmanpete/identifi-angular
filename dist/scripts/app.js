(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxRQURyRCxFQUMrRCxrQkFEL0QsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsQ0FERjs7RUFLQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWlCLElBQUEsTUFBQSxDQUFPLEdBQUEsR0FBTSxNQUFOLEdBQWUsR0FBdEIsRUFBMkIsSUFBM0IsQ0FBakIsRUFBbUQsV0FBbkQ7QUFDUCxlQUFPLElBQUksQ0FBQyxXQUFMLENBQWlCLElBQUksQ0FBQyxRQUFMLENBQUEsQ0FBakIsRUFGVDs7QUFHQSxhQUFPO0lBSlQ7RUFEb0QsQ0FBdEQ7O0VBT0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFNBQXpDLEVBQW9ELFNBQUE7V0FDbEQsU0FBQyxLQUFEO0FBQ0UsVUFBQTtNQUFBLENBQUEsR0FBSSxDQUNGLElBREUsRUFFRixJQUZFLEVBR0YsSUFIRSxFQUlGLElBSkU7TUFNSixDQUFBLEdBQUksS0FBQSxHQUFRO2FBQ1osS0FBQSxHQUFRLENBQUMsQ0FBRSxDQUFBLENBQUMsQ0FBQSxHQUFJLEVBQUwsQ0FBQSxHQUFXLEVBQVgsQ0FBRixJQUFvQixDQUFFLENBQUEsQ0FBQSxDQUF0QixJQUE0QixDQUFFLENBQUEsQ0FBQSxDQUEvQjtJQVJWO0VBRGtELENBQXBEO0FBckJBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcicsXG4gIFsnbmdBbmltYXRlJywgJ25nQ29va2llcycsICduZ1RvdWNoJywgJ25nU2FuaXRpemUnLCAnbmdNZXNzYWdlcycsXG4gICduZ0FyaWEnLCAnbmdSZXNvdXJjZScsICd1aS5yb3V0ZXInLCAndWkuYm9vdHN0cmFwJywgJ3RvYXN0cicsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlc2NhcGUnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KVxuIF1cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VuY29kZVVSSUNvbXBvbmVudCcsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBpbnB1dFxuIF1cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnb3JkaW5hbCcsIC0+XG4gIChpbnB1dCkgLT5cbiAgICBzID0gW1xuICAgICAgJ3RoJ1xuICAgICAgJ3N0J1xuICAgICAgJ25kJ1xuICAgICAgJ3JkJ1xuICAgIF1cbiAgICB2ID0gaW5wdXQgJSAxMDBcbiAgICBpbnB1dCArIChzWyh2IC0gMjApICUgMTBdIG9yIHNbdl0gb3Igc1swXSlcbiJdfQ==

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
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.msgs = {
        loading: false,
        finished: false,
        list: []
      };
      $scope.filters.type = 'rating';
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
          var i, len, messages, pair, v;
          messages = [];
          for (i = 0, len = res.length; i < len; i++) {
            pair = res[i];
            if (pair.value) {
              v = pair.value;
              v.searchKey = pair.key;
              messages.push(v);
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
        $scope.msgs.list = [];
        $scope.msgs.finished = false;
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
            return $scope.$watch('apiReady', function(isReady) {
              if (isReady) {
                return $scope.getIdentityProfile({
                  type: 'keyID',
                  value: $scope.message.signer_keyid
                }, function(profile) {
                  return $scope.$apply(function() {
                    return $scope.message.verifiedBy = profile;
                  });
                });
              }
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
          if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
            return $http.get('/ipfs/' + hash).then(function(res) {
              return $scope.message = {
                'jws': res.data
              };
            }).then(processResponse)["catch"](function() {
              return getMessageFromApi();
            });
          } else {
            return getMessageFromApi();
          }
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUUsRUFFakUsWUFGaUUsRUFHakUsU0FIaUUsRUFJakUsY0FKaUUsRUFLakUsV0FMaUUsRUFNakUsT0FOaUUsRUFRakUsVUFSaUUsRUFTakUsUUFUaUUsRUFVakUsVUFWaUUsRUFXakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRjtNQUNFLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFDOUIsTUFBTSxDQUFDLElBQVAsR0FDRTtRQUFBLE9BQUEsRUFBUyxLQUFUO1FBQ0EsUUFBQSxFQUFVLEtBRFY7UUFFQSxJQUFBLEVBQU0sRUFGTjs7TUFHRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0I7TUFFdEIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBQyxNQUFEO2VBQ2IsSUFBQSxLQUFBLENBQU0sSUFBSSxDQUFDLEdBQUwsQ0FBUyxDQUFULEVBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxNQUFULENBQVosQ0FBTjtNQURhO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtBQUNqQixZQUFBO1FBQUEsU0FBQSxHQUFZO1FBQ1osSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNFLFNBQUEsR0FBWSxXQURkO1NBQUEsTUFFSyxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0gsU0FBQSxHQUFZLFdB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QUtmLGVBTGU7VUFEQztVQVFwQixJQUFBLEdBQU8sWUFBWSxDQUFDO1VBQ3BCLEtBQUEsR0FBUTtVQUNSLElBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyx3QkFBWCxDQUFIO21CQUNFLEtBQUssQ0FBQyxHQUFOLENBQVUsUUFBQSxHQUFXLElBQXJCLENBQTBCLENBQUMsSUFBM0IsQ0FBZ0MsU0FBQyxHQUFEO3FCQUM5QixNQUFNLENBQUMsT0FBUCxHQUFpQjtnQkFBRSxLQUFBLEVBQU8sR0FBRyxDQUFDLElBQWI7O1lBRGEsQ0FBaEMsQ0FFQSxDQUFDLElBRkQsQ0FFTSxlQUZOLENBR0EsRUFBQyxLQUFELEVBSEEsQ0FHTyxTQUFBO3FCQUNMLGlCQUFBLENBQUE7WUFESyxDQUhQLEVBREY7V0FBQSxNQUFBO21CQU9FLGlCQUFBLENBQUEsRUFQRjtXQXZCRjs7TUFEZTtJQTdEbkIsQ0FYaUU7R0FBbkU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBNZXNzYWdlcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdNZXNzYWdlcydcbiAgJ2NvbmZpZydcbiAgJyR0aW1lb3V0J1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0KSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgJHNjb3BlLm1zZ3MgPVxuICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgIGZpbmlzaGVkOiBmYWxzZVxuICAgICAgbGlzdDogW11cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5pY29uQ291bnQgPSAocmF0aW5nKSAtPlxuICAgICAgbmV3IEFycmF5KE1hdGgubWF4KDEsIE1hdGguYWJzKHJhdGluZykpKVxuXG4gICAgJHNjb3BlLmljb25TdHlsZSA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnbmV1dHJhbCdcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ3Bvc2l0aXZlJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICduZWdhdGl2ZSdcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmljb25DbGFzcyA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLXVwJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLWRvd24nXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcblxuICAgICRzY29wZS5maW5kID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5sb2FkaW5nXG4gICAgICAkc2NvcGUubXNncyA9ICRzY29wZS5tc2dzIHx8IFtdXG4gICAgICAkc2NvcGUubXNncy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgIyBHZXQgbGF0ZXN0IG1lc3NhZ2VzIGZyb20gaXBmcyBpbmRleFxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgIHAgPSAkc2NvcGUubWVzc2FnZUluZGV4LnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBtZXNzYWdlcyA9IFtdXG4gICAgICAgIGZvciBwYWlyIGluIHJlc1xuICAgICAgICAgIGlmIHBhaXIudmFsdWVcbiAgICAgICAgICAgIHYgPSBwYWlyLnZhbHVlXG4gICAgICAgICAgICB2LnNlYXJjaEtleSA9IHBhaXIua2V5XG4gICAgICAgICAgICBtZXNzYWdlcy5wdXNoKHYpXG4gICAgICAgIHJldHVybiBtZXNzYWdlc1xuICAgICAgcC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBtZXNzYWdlc1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUubXNncy5saXN0LCBtZXNzYWdlcylcbiAgICAgICAgaWYgbWVzc2FnZXMubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxICMgYnVnXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5sb2FkaW5nID0gZmFsc2VcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLm1zZ3MubGlzdCA9IFtdXG4gICAgICAkc2NvcGUubXNncy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgIyBGaW5kIGV4aXN0aW5nIE1lc3NhZ2VcbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICBpZiAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlID0gLT5cbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFskc2NvcGUubWVzc2FnZV0sIHt9LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJ01lc3NhZ2UgJyArIGhhc2hcbiAgICAgICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSgkc2NvcGUubWVzc2FnZSlcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5hdXRob3JHcmF2YXRhciA9IENyeXB0b0pTLk1ENSgkc2NvcGUubWVzc2FnZS5hdXRob3JFbWFpbCBvciAkc2NvcGUubWVzc2FnZS5kYXRhLmF1dGhvclswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudEdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KCRzY29wZS5tZXNzYWdlLnJlY2lwaWVudEVtYWlsIG9yICRzY29wZS5tZXNzYWdlLmRhdGEucmVjaXBpZW50WzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuaGFzaCA9IGhhc2hcbiAgICAgICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0SWRlbnRpdHlQcm9maWxlIHsgdHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZCB9LCAocHJvZmlsZSkgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG5cbiAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkgPSAtPlxuICAgICAgICAgICRzY29wZS5tZXNzYWdlID0gTWVzc2FnZXMuZ2V0XG4gICAgICAgICAgICBpZDogaGFzaFxuICAgICAgICAgICAgdmlld3BvaW50X25hbWU6ICRzY29wZS5maWx0ZXJzLnZpZXdwb2ludF9uYW1lXG4gICAgICAgICAgICB2aWV3cG9pbnRfdmFsdWU6ICRzY29wZS5maWx0ZXJzLnZpZXdwb2ludF92YWx1ZVxuICAgICAgICAgICAgbWF4X2Rpc3RhbmNlOiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICAsIHByb2Nlc3NSZXNwb25zZVxuXG4gICAgICAgIGhhc2ggPSAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgcXVlcnkgPSBudWxsXG4gICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAkaHR0cC5nZXQoJy9pcGZzLycgKyBoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IHsgJ2p3cyc6IHJlcy5kYXRhIH0gIyBzYW1lIGZvcm1hdCBhcyB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IE1lc3NhZ2VzLmdldFxuICAgICAgICAgIC50aGVuIHByb2Nlc3NSZXNwb25zZVxuICAgICAgICAgIC5jYXRjaCAtPiAjIGZhbGxiYWNrIGdvIGxvY2FsIGlmIGlwZnMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkoKVxuXG4gICAgcmV0dXJuXG5dXG4iXX0=

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
      var jws, previousState, previousStateParams, scrollTo, token;
      $scope.authentication = {};
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
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage();
      $scope.getIpfsIndexes = function(indexRoot, fallbackIndexRoot) {
        var getBtreeOrFallback;
        getBtreeOrFallback = function(url, fallbackUrl) {
          return $window.merkleBtree.MerkleBTree.getByHash(url, $scope.ipfsStorage)["catch"](function() {
            console.log('Failed to fetch index', url, ', reverting to', fallbackUrl);
            return $window.merkleBtree.MerkleBTree.getByHash(fallbackUrl, $scope.ipfsStorage);
          });
        };
        console.log('Getting Identifi index from IPFS:', indexRoot);
        return $q.all([
          getBtreeOrFallback(indexRoot + '/identities_by_distance', fallbackIndexRoot + '/identities_by_distance'), getBtreeOrFallback(indexRoot + '/identities_by_searchkey', fallbackIndexRoot + '/identities_by_searchkey'), getBtreeOrFallback(indexRoot + '/messages_by_timestamp', fallbackIndexRoot + '/messages_by_timestamp'), $http.get(indexRoot + '/info')["catch"](function() {
            console.log('Failed to fetch index', indexRoot + '/info,', 'reverting to', fallbackIndexRoot + '/info');
            return $http.get(fallbackIndexRoot + '/info');
          })
        ]).then(function(results) {
          $scope.identitiesByDistance = results[0];
          $scope.identitiesBySearchKey = results[1];
          $scope.messageIndex = results[2];
          $scope.nodeInfo = {};
          return $scope.nodeInfo.profile = $scope.profileFromData(results[3].data, ['keyID', results[3].data.keyID]);
        }).then(function() {
          var host, path;
          path = $location.absUrl();
          host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi' : '';
          return $http.get(host + '/api', {
            timeout: 2000
          });
        }).then(function(res) {
          return $scope.nodeInfo = angular.extend($scope.nodeInfo, res.data);
        });
      };
      $scope.getIpfsIndexes('/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs', '/ipfs/QmUWZkgRzVzYkyDXZjktdUZ2hc1NoBuRjyq2tASoGsaCEc').then(function() {
        return $scope.apiReady = true;
      })["catch"](function(e) {
        console.log('initialization failed:', e);
        return $scope.apiReady = true;
      });
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.create = function(event, params, id) {
        var message, options, r;
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
        options = {
          headers: {
            'Authorization': 'Bearer ' + $scope.authentication.token
          }
        };
        r = $http.post('/api/messages', message, options);
        r.then((function(response) {
          $scope.newMessage.comment = '';
          $scope.newMessage.rating = 1;
          $scope.newVerification.type = '';
          $scope.newVerification.value = '';
          $scope.$root.$broadcast('MessageAdded', {
            message: response.data,
            id: id
          });
          if (response.data.ipfsIndexRoot) {
            $scope.getIpfsIndexes('/ipfs/' + response.data.ipfsIndexRoot);
          }
        }), function(errorResponse) {
          $scope.error = errorResponse.data || JSON.stringify(errorResponse);
        });
        return r;
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1;
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.authentication = {};
        localStorageService.clearAll();
        return $state.go('identities.list');
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
            return $http.get('/ipfs/' + res[0].value);
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
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var alpha, i, index, keyHash, maxRatingDiff, minRatingDiff, neutralRating, parsedJws, pubKey, rating, ref, ref1, signedData, smallestIndex;
          parsedJws = KJUR.jws.JWS.parse(msg.jws);
          msg.data = parsedJws.payloadObj;
          if (!msg.signer_keyid) {
            keyHash = CryptoJS.SHA256(parsedJws.headerObj.kid);
            msg.signer_keyid = CryptoJS.enc.Base64.stringify(keyHash);
          }
          if (verifySignature && false) {
            pubKey = KEYUTIL.getKey(parsedJws.headerObj.kid);
            if (!KJUR.jws.JWS.verify(msg.jws, pubKey, ['ES256'])) {
              console.error('Invalid signature for msg', msg);
              return;
            }
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
            return $http.get('/ipfs/' + msg.ipfs_hash).then(function(res) {
              msg.jws = res.data;
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
      $scope.search = function(query, limit) {
        var cursor, q, searchKey;
        if ($scope.ids.loading) {
          return;
        }
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
        q = null;
        if (searchKey.length) {
          q = $scope.identitiesBySearchKey.searchText(searchKey, limit, cursor);
        } else {
          q = $scope.identitiesByDistance.searchText(searchKey, limit, cursor);
        }
        q = q.then(function(identities) {
          var queries;
          if (!$scope.ids.list) {
            $scope.ids.list = [];
          }
          queries = [];
          angular.forEach(identities, function(row) {
            var p;
            if (!(row.value && row.value.length && !$scope.identitiesByHash[row.value])) {
              return;
            }
            $scope.identitiesByHash[row.value] = true;
            searchKey = row.key;
            p = $http.get('/ipfs/' + row.value).then(function(row) {
              var identity, smallestIndex;
              identity = {
                searchKey: searchKey
              };
              smallestIndex = 1000;
              angular.forEach(row.data.attrs, function(attr) {
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
                identity.name = row.data.attrs[0].val;
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
        return q.then(function() {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFlN0QsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUNBLG1CQURBLEVBQ3FCLFNBRHJCLEVBQ2dDLE9BRGhDLEVBQ3lDLEVBRHpDOztBQUVFOzs7Ozs7Ozs7QUFBQSxVQUFBO01BV0EsTUFBTSxDQUFDLGNBQVAsR0FBd0I7TUFDeEIsS0FBQSxHQUFRLFNBQVMsQ0FBQyxNQUFWLENBQUEsQ0FBa0IsQ0FBQztNQUMzQixJQUFHLEtBQUg7UUFDRSxHQUFBLEdBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBYixDQUFtQixLQUFuQixDQUF5QixDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBdEIsR0FBOEI7UUFDOUIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUF0QixHQUE2QixHQUFHLENBQUM7UUFDakMsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsS0FBakM7UUFDQSxhQUFBLEdBQWdCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCLENBQUEsSUFBb0M7UUFDcEQsbUJBQUEsR0FBc0IsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsQ0FBQSxJQUEwQztRQUNoRSxNQUFNLENBQUMsRUFBUCxDQUFVLGFBQVYsRUFB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dUIyQixFQXZCM0I7QUF1QjJCO0FBdkIzQjtZQXlCSSxFQUFBLEdBQUssT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLGFBQXRCO1lBQ0wsWUFBQSxDQUFhLE1BQU0sQ0FBQyxLQUFwQjtZQUNBLElBQUEsR0FBTyxVQUFBLENBQVcsQ0FBQyxTQUFBO2NBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixFQUFFLENBQUMsR0FBSCxDQUFBO2NBQ3BCLE1BQU0sQ0FBQyxNQUFQLENBQUE7WUFGaUIsQ0FBRCxDQUFYLEVBSUosR0FKSTtZQUtQLE1BQU0sQ0FBQyxLQUFQLEdBQWU7QUFDZjtBQWpDSjtNQURxQjthQW9DdkIsTUFBTSxDQUFDLG9CQUFQLEdBQThCLFNBQUMsSUFBRDtRQUM1QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO1VBQUUsSUFBQSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBN0M7U0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQTVjaEMsQ0FmNkQ7R0FBL0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAnY29uZmlnJyxcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICckdWliTW9kYWwnXG4gICckd2luZG93J1xuICAnJHEnXG5cbiAgIydBdXRoZW50aWNhdGlvbidcbiAgIydNZW51cydcbiAgIydQZXJzb25hJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSkgLT4gIyBBdXRoZW50aWNhdGlvbiwgTWVudXMsIFBlcnNvbmFcbiAgICAjIyNcbiAgICBQZXJzb25hLndhdGNoXG4gICAgICBsb2dnZWRJblVzZXI6IEF1dGhlbnRpY2F0aW9uLnVzZXIuZW1haWxcbiAgICAgIG9ubG9naW46IChhc3NlcnRpb24pIC0+XG4gICAgICAgICRodHRwLnBvc3QoJy9hdXRoL3BlcnNvbmEnLCBhc3NlcnRpb246IGFzc2VydGlvbikudGhlbiAtPlxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgIyBGSVhNRVxuICAgICAgICAgICAgICAgICAgICAgICAgb25sb2dvdXQ6IC0+XG4gICAgIyMjXG5cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cbiAgICB0b2tlbiA9ICRsb2NhdGlvbi5zZWFyY2goKS50b2tlblxuICAgIGlmIHRva2VuXG4gICAgICBqd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UodG9rZW4pLnBheWxvYWRPYmpcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi50b2tlbiA9IHRva2VuXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9IGp3cy51c2VyXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgIHByZXZpb3VzU3RhdGUgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3RhdGUnKSB8fCAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgcHJldmlvdXNTdGF0ZVBhcmFtcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdzdGF0ZVBhcmFtcycpIHx8IHt9XG4gICAgICAkc3RhdGUuZ28ocHJldmlvdXNTdGF0ZSwgcHJldmlvdXNTdGF0ZVBhcmFtcylcbiAgICBlbHNlXG4gICAgICB0b2tlbiA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpXG4gICAgICBpZiB0b2tlblxuICAgICAgICBqd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UodG9rZW4pLnBheWxvYWRPYmpcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuID0gdG9rZW5cbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPSBqd3MudXNlclxuXG4gICAgJHNjb3BlLnF1ZXJ5ID0ge31cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gJydcbiAgICAkc2NvcGUuaWRzID0geyBsaXN0OiBbXSB9XG4gICAgJHNjb3BlLnBob25lUmVnZXggPSAvXlxcKz9cXGQrJC9cblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJZGVudGlmaSdcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNTdG9yYWdlID0gbmV3ICR3aW5kb3cubWVya2xlQnRyZWUuSVBGU0dhdGV3YXlTdG9yYWdlKClcblxuICAgICRzY29wZS5nZXRJcGZzSW5kZXhlcyA9IChpbmRleFJvb3QsIGZhbGxiYWNrSW5kZXhSb290KSAtPlxuICAgICAgZ2V0QnRyZWVPckZhbGxiYWNrID0gKHVybCwgZmFsbGJhY2tVcmwpIC0+XG4gICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKHVybCwgJHNjb3BlLmlwZnNTdG9yYWdlKS5jYXRjaCAtPlxuICAgICAgICAgIGNvbnNvbGUubG9nICdGYWlsZWQgdG8gZmV0Y2ggaW5kZXgnLCB1cmwsICcsIHJldmVydGluZyB0bycsIGZhbGxiYWNrVXJsXG4gICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2goZmFsbGJhY2tVcmwsICRzY29wZS5pcGZzU3RvcmFnZSlcblxuICAgICAgY29uc29sZS5sb2cgJ0dldHRpbmcgSWRlbnRpZmkgaW5kZXggZnJvbSBJUEZTOicsIGluZGV4Um9vdFxuICAgICAgJHEuYWxsKFtcbiAgICAgICAgZ2V0QnRyZWVPckZhbGxiYWNrKGluZGV4Um9vdCArICcvaWRlbnRpdGllc19ieV9kaXN0YW5jZScsIGZhbGxiYWNrSW5kZXhSb290ICsgJy9pZGVudGl0aWVzX2J5X2Rpc3RhbmNlJyksXG4gICAgICAgIGdldEJ0cmVlT3JGYWxsYmFjayhpbmRleFJvb3QgKyAnL2lkZW50aXRpZXNfYnlfc2VhcmNoa2V5JywgZmFsbGJhY2tJbmRleFJvb3QgKyAnL2lkZW50aXRpZXNfYnlfc2VhcmNoa2V5JyksXG4gICAgICAgIGdldEJ0cmVlT3JGYWxsYmFjayhpbmRleFJvb3QgKyAnL21lc3NhZ2VzX2J5X3RpbWVzdGFtcCcsIGZhbGxiYWNrSW5kZXhSb290ICsgJy9tZXNzYWdlc19ieV90aW1lc3RhbXAnKSxcbiAgICAgICAgJGh0dHAuZ2V0KGluZGV4Um9vdCArICcvaW5mbycpLmNhdGNoIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgJ0ZhaWxlZCB0byBmZXRjaCBpbmRleCcsIGluZGV4Um9vdCArICcvaW5mbywnLCAncmV2ZXJ0aW5nIHRvJywgZmFsbGJhY2tJbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAgICAgJGh0dHAuZ2V0KGZhbGxiYWNrSW5kZXhSb290ICsgJy9pbmZvJylcbiAgICAgIF0pXG4gICAgICAudGhlbiAocmVzdWx0cykgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeURpc3RhbmNlID0gcmVzdWx0c1swXVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5U2VhcmNoS2V5ID0gcmVzdWx0c1sxXVxuICAgICAgICAkc2NvcGUubWVzc2FnZUluZGV4ID0gcmVzdWx0c1syXVxuICAgICAgICAkc2NvcGUubm9kZUluZm8gPSB7fVxuICAgICAgICAkc2NvcGUubm9kZUluZm8ucHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzdWx0c1szXS5kYXRhLCBbJ2tleUlEJywgcmVzdWx0c1szXS5kYXRhLmtleUlEXSlcbiAgICAgIC50aGVuIC0+XG4gICAgICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICAgICAgaG9zdCA9IGlmIHBhdGgubWF0Y2ggL1xcL2lwW25mXXNcXC8vIHRoZW4gJ2h0dHBzOi8vaWRlbnRpLmZpJyBlbHNlICcnXG4gICAgICAgICRodHRwLmdldChob3N0ICsgJy9hcGknLCB7IHRpbWVvdXQ6IDIwMDAgfSlcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgICRzY29wZS5ub2RlSW5mbyA9IGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5ub2RlSW5mbywgcmVzLmRhdGFcblxuICAgICRzY29wZS5nZXRJcGZzSW5kZXhlcyAnL2lwbnMvUW1iYjFEUndkNzVyWms1VG90VFhKWXpEU0pMNkJhTlQxREFRNlZiS2NLTGhicycsICcvaXBmcy9RbVVXWmtnUnpWellreURYWmprdGRVWjJoYzFOb0J1Ump5cTJ0QVNvR3NhQ0VjJ1xuICAgIC50aGVuIC0+XG4gICAgICAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG4gICAgLmNhdGNoIChlKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ2luaXRpYWxpemF0aW9uIGZhaWxlZDonLCBlXG4gICAgICAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG5cbiAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICByYXRpbmc6IDFcbiAgICAgIGNvbW1lbnQ6ICcnXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlID0gKGV2ZW50LCBwYXJhbXMsIGlkKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGNvbnRleHQ6ICdpZGVudGlmaSdcblxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgYW5ndWxhci5leHRlbmQgbWVzc2FnZSxcbiAgICAgICAgICBtYXhSYXRpbmc6IDNcbiAgICAgICAgICBtaW5SYXRpbmc6IC0zXG4gICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLCBwYXJhbXNcbiAgICAgIG9wdGlvbnMgPVxuICAgICAgICBoZWFkZXJzOlxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuXG4gICAgICByID0gJGh0dHAucG9zdCgnL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICByLnRoZW4gKChyZXNwb25zZSkgLT5cbiAgICAgICAgIyBDbGVhciBmb3JtIGZpZWxkc1xuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5jb21tZW50ID0gJydcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2UucmF0aW5nID0gMVxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnJ1xuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlID0gJydcbiAgICAgICAgJHNjb3BlLiRyb290LiRicm9hZGNhc3QgJ01lc3NhZ2VBZGRlZCcsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YVxuICAgICAgICAgIGlkOiBpZFxuICAgICAgICAkc2NvcGUuZ2V0SXBmc0luZGV4ZXMgJy9pcGZzLycgKyByZXNwb25zZS5kYXRhLmlwZnNJbmRleFJvb3QgaWYgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290XG4gICAgICAgIHJldHVyblxuICAgICAgKSwgKGVycm9yUmVzcG9uc2UpIC0+XG4gICAgICAgICRzY29wZS5lcnJvciA9IGVycm9yUmVzcG9uc2UuZGF0YSB8fCBKU09OLnN0cmluZ2lmeShlcnJvclJlc3BvbnNlKVxuICAgICAgICByZXR1cm5cbiAgICAgIHJldHVybiByXG5cbiAgICAkc2NvcGUuYWRkQXR0cmlidXRlID0gLT5cbiAgICAgICRsb2NhdGlvbi5wYXRoICcjL2lkZW50aXRpZXMvY3JlYXRlLycgKyAkc2NvcGUucXVlcnkudGVybVxuXG4gICAgJHNjb3BlLmxvZ2luID0gLT5cbiAgICAgICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9IC0xICMgYmVjYXVzZSB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYSB0cnVzdCBpbmRleCB5ZXRcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuZGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPiAwIGFuZCB2YWx1ZS5kaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUubG9nb0NsaWNrZWQgPSAtPlxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAgIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCdcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLmRhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5wcm9maWxlRnJvbURhdGEgPSAoZGF0YSwgZmFsbGJhY2tJZCkgLT5cbiAgICAgIGlmIGRhdGEuYXR0cnMgYW5kIGRhdGEuYXR0cnMubGVuZ3RoXG4gICAgICAgIGRhdGEuZGlzdCA9IGRhdGEuYXR0cnNbMF0uZGlzdCArIDBcbiAgICAgICAgZGF0YS5wb3MgPSBkYXRhLmF0dHJzWzBdLnBvc1xuICAgICAgICBkYXRhLm5lZyA9IGRhdGEuYXR0cnNbMF0ubmVnXG4gICAgICAgIGZvciBrLCB2IG9mIGRhdGEuYXR0cnNcbiAgICAgICAgICBzd2l0Y2ggdi5uYW1lXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICBkYXRhLm5hbWUgPSB2LnZhbCB1bmxlc3MgZGF0YS5uYW1lXG4gICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgZGF0YS5uaWNrbmFtZSA9IHYudmFsIHVubGVzcyBkYXRhLm5pY2tuYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgZGF0YS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENSh2LnZhbCkudG9TdHJpbmcoKVxuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uaWNrbmFtZSBpZiBkYXRhLm5pY2tuYW1lIGFuZCBub3QgZGF0YS5uYW1lXG4gICAgICBkYXRhLm5hbWUgPSBmYWxsYmFja0lkLnZhbHVlIHVubGVzcyBkYXRhLm5hbWVcbiAgICAgIGRhdGEuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoZmFsbGJhY2tJZC52YWx1ZSkudG9TdHJpbmcoKSB1bmxlc3MgZGF0YS5ncmF2YXRhclxuICAgICAgcmV0dXJuIGRhdGFcblxuICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgPSAoaWQsIGNhbGxiYWNrKSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleS5zZWFyY2hUZXh0KGVuY29kZVVSSUNvbXBvbmVudChpZC52YWx1ZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudHlwZSksIDEpXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBpZiByZXMubGVuZ3RoXG4gICAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2lwZnMvJyArIHJlc1swXS52YWx1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB7IGRhdGE6IHt9IH1cbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIHByb2ZpbGUgPSAkc2NvcGUucHJvZmlsZUZyb21EYXRhKHJlcy5kYXRhLCBpZClcbiAgICAgICAgaWYgY2FsbGJhY2tcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2socHJvZmlsZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9maWxlXG5cbiAgICAkc2NvcGUub3Blbk1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UsIHNpemUpIC0+XG4gICAgICB0ID0gZXZlbnQudGFyZ2V0XG4gICAgICByZXR1cm4gaWYgYW5ndWxhci5lbGVtZW50KHQpLmNsb3Nlc3QoJ2EnKS5sZW5ndGhcbiAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKG1lc3NhZ2UpXG4gICAgICAkc2NvcGUubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgeyB0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkIH0sIChwcm9maWxlKSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG4gICAgICBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICBtb2RhbEluc3RhbmNlLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgbW9kYWxJbnN0YW5jZS5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgIyMjXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0gQXV0aGVudGljYXRpb25cbiAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyID09ICdwZXJzb25hJ1xuICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSA9ICdlbWFpbCdcbiAgICAgIGVsc2VcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAndXJsJ1xuICAgICAgc3dpdGNoIEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJcbiAgICAgICAgd2hlbiAncGVyc29uYSdcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLmVtYWlsXG4gICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIEF1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9IEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJEYXRhLmxpbmtcbiAgICAgICAgICBicmVha1xuICAgICMjI1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgdmVyaWZ5U2lnbmF0dXJlKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBwYXJzZWRKd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgICAgbXNnLmRhdGEgPSBwYXJzZWRKd3MucGF5bG9hZE9ialxuICAgICAgICAjIGRvIHNpZ25hdHVyZSB2ZXJpZmljYXRpb24gaGVyZT9cbiAgICAgICAgdW5sZXNzIG1zZy5zaWduZXJfa2V5aWRcbiAgICAgICAgICBrZXlIYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHBhcnNlZEp3cy5oZWFkZXJPYmoua2lkKVxuICAgICAgICAgIG1zZy5zaWduZXJfa2V5aWQgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShrZXlIYXNoKVxuXG4gICAgICAgIGlmIHZlcmlmeVNpZ25hdHVyZSBhbmQgZmFsc2VcbiAgICAgICAgICBwdWJLZXkgPSBLRVlVVElMLmdldEtleShwYXJzZWRKd3MuaGVhZGVyT2JqLmtpZClcbiAgICAgICAgICB1bmxlc3MgS0pVUi5qd3MuSldTLnZlcmlmeShtc2cuandzLCBwdWJLZXksIFsnRVMyNTYnXSlcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IgJ0ludmFsaWQgc2lnbmF0dXJlIGZvciBtc2cnLCBtc2cgIyBUT0RPOiBzaG91bGQgaGlkZSB0aGUgbWVzc2FnZVxuICAgICAgICAgICAgcmV0dXJuXG5cbiAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JfZW1haWwgfHwgbXNnLmRhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbMF1cbiAgICAgICAgaSA9IHVuZGVmaW5lZFxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEuYXV0aG9yLmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEuYXV0aG9yW2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yW2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBtc2cuZGF0YS5hdXRob3JbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5hdXRob3JfbmFtZSA9IG1zZy5kYXRhLmF1dGhvcltpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50WzBdXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5yZWNpcGllbnQubGVuZ3RoXG4gICAgICAgICAgaW5kZXggPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZihtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0pXG4gICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1cbiAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmRhdGEucmVjaXBpZW50W2ldWzFdXG4gICAgICAgICAgaSsrXG4gICAgICAgIHNpZ25lZERhdGEgPSBtc2cuZGF0YVxuICAgICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgICBtc2cuaWNvblN0eWxlID0gJydcbiAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnJ1xuICAgICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICAgIG1zZy5pY29uQ291bnQgPSBuZXcgQXJyYXkoMSlcbiAgICAgICAgc3dpdGNoIHNpZ25lZERhdGEudHlwZVxuICAgICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ2Nvbm5lY3Rpb24nXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2sgcG9zaXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtZXJyb3InXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgICByYXRpbmcgPSBzaWduZWREYXRhLnJhdGluZ1xuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChzaWduZWREYXRhLm1pblJhdGluZyArIHNpZ25lZERhdGEubWF4UmF0aW5nKSAvIDJcbiAgICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIG1pblJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1pblJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1heFJhdGluZ0RpZmYgPCAyIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1heFJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nIC0gMC41KSAvIG1heFJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgZWxzZSBpZiByYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93biBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyArIDAuNSkgLyBtaW5SYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOGUzOydcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbmV1dHJhbCdcblxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBpZiBtc2cuaXBmc19oYXNoIGFuZCBub3QgbXNnLmp3c1xuICAgICAgICAgICRodHRwLmdldCgnL2lwZnMvJyArIG1zZy5pcGZzX2hhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIG1zZy5qd3MgPSByZXMuZGF0YVxuICAgICAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuICAgICAgICBlbHNlIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUuaWRzLmxvYWRpbmdcbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgNTBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICBxID0gbnVsbFxuICAgICAgaWYgc2VhcmNoS2V5Lmxlbmd0aFxuICAgICAgICBxID0gJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleS5zZWFyY2hUZXh0KHNlYXJjaEtleSwgbGltaXQsIGN1cnNvcilcbiAgICAgIGVsc2VcbiAgICAgICAgcSA9ICRzY29wZS5pZGVudGl0aWVzQnlEaXN0YW5jZS5zZWFyY2hUZXh0KHNlYXJjaEtleSwgbGltaXQsIGN1cnNvcilcbiAgICAgIHEgPSBxLnRoZW4gKGlkZW50aXRpZXMpIC0+XG4gICAgICAgIGlmICEkc2NvcGUuaWRzLmxpc3RcbiAgICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICBxdWVyaWVzID0gW11cbiAgICAgICAgYW5ndWxhci5mb3JFYWNoIGlkZW50aXRpZXMsIChyb3cpIC0+XG4gICAgICAgICAgcmV0dXJuIHVubGVzcyByb3cudmFsdWUgYW5kIHJvdy52YWx1ZS5sZW5ndGggYW5kICEkc2NvcGUuaWRlbnRpdGllc0J5SGFzaFtyb3cudmFsdWVdXG4gICAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2hbcm93LnZhbHVlXSA9IHRydWVcbiAgICAgICAgICBzZWFyY2hLZXkgPSByb3cua2V5XG4gICAgICAgICAgcCA9ICRodHRwLmdldCgnL2lwZnMvJyArIHJvdy52YWx1ZSlcbiAgICAgICAgICAudGhlbiAocm93KSAtPlxuICAgICAgICAgICAgaWRlbnRpdHkgPSB7IHNlYXJjaEtleTogc2VhcmNoS2V5IH1cbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgICBhbmd1bGFyLmZvckVhY2ggcm93LmRhdGEuYXR0cnMsIChhdHRyKSAtPlxuICAgICAgICAgICAgICBkaXN0ID0gcGFyc2VJbnQoYXR0ci5kaXN0KVxuICAgICAgICAgICAgICBpZiAhaXNOYU4oZGlzdCkgYW5kIChpZGVudGl0eS5kaXN0YW5jZSA9PSB1bmRlZmluZWQgb3IgKDAgPD0gZGlzdCA8IGlkZW50aXR5LmRpc3RhbmNlKSlcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5kaXN0YW5jZSA9IGRpc3RcbiAgICAgICAgICAgICAgaWYgaWRlbnRpdHkucG9zID09IHVuZGVmaW5lZCBhbmQgcGFyc2VJbnQoYXR0ci5wb3MpID4gMFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LnBvcyA9IGF0dHIucG9zXG4gICAgICAgICAgICAgIGlmIGlkZW50aXR5Lm5lZyA9PSB1bmRlZmluZWQgYW5kIHBhcnNlSW50KGF0dHIubmVnKSA+IDBcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5uZWcgPSBhdHRyLm5lZ1xuICAgICAgICAgICAgICBzd2l0Y2ggYXR0ci5uYW1lXG4gICAgICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5lbWFpbCA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5uYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5pY2tuYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5hbWUgPSBhdHRyLnZhbCBpZiAhaWRlbnRpdHkubmFtZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW4nLCAnYml0Y29pbl9hZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuYml0Y29pbiA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICAgICAgaWYgYXR0ci52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS50d2l0dGVyID0gYXR0ci52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgICBpZiBhdHRyLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5mYWNlYm9vayA9IGF0dHIudmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICAgIGlmIGF0dHIudmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lmdvb2dsZVBsdXMgPSBhdHRyLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoYXR0ci5uYW1lKVxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkubGlua1RvXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkubGlua1RvID0geyB0eXBlOiBhdHRyLm5hbWUsIHZhbHVlOiBhdHRyLnZhbCB9XG4gICAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LmxpbmtUbyA9IHsgdHlwZTogYXR0ci5uYW1lLCB2YWx1ZTogYXR0ci52YWwgfVxuICAgICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkuZ3JhdmF0YXJcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgaWYgIWlkZW50aXR5Lm5hbWVcbiAgICAgICAgICAgICAgaWRlbnRpdHkubmFtZSA9IHJvdy5kYXRhLmF0dHJzWzBdLnZhbFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0LnB1c2goaWRlbnRpdHkpXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIHF1ZXJpZXMucHVzaCBwXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoID4gMFxuICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gMFxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA8IGxpbWl0XG4gICAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuICRxLmFsbChxdWVyaWVzKVxuICAgICAgcmV0dXJuIHEudGhlbiAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IDBcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSAtIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXkgKyAxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgc2Nyb2xsVG8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSlcbiAgICAgICAgd2hlbiAxM1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZCA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV1cbiAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQubGlua1RvLnR5cGUsIHZhbHVlOiBpZC5saW5rVG8udmFsdWUgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8udHlwZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbHVlIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5dXG4iXX0=

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'config', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config) {
      var messagesAdded;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.info = {};
      $scope.stats = {};
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = [];
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
        if (!$state.is('identities.show')) {
          return;
        }
        if (args.message.signedData.type === 'verify_identity' && !args.id.confirmed) {
          args.id.confirmed = true;
          args.id.confirmations += 1;
          if ($scope.connections && $scope.connections.indexOf(args.id) === -1) {
            return $scope.connections.push(args.id);
          }
        } else if (args.message.signedData.type === 'unverify_identity' && !args.id.refuted) {
          args.id.refuted = true;
          args.id.refutations += 1;
          if ($scope.connections.indexOf(args.id) === -1) {
            return $scope.connections.push(args.id);
          }
        } else if (args.message.signedData.type === 'rating') {
          if (messagesAdded) {
            $scope.received.shift();
          }
          $scope.processMessages([args.message]);
          $scope.received.unshift(args.message);
          return messagesAdded = true;
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
        return $scope.create(event, params).then(function(success) {
          return $state.go('messages.show', {
            id: success.data.hash
          });
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.getConnections = function() {
        var alpha, c, conn, connections, key, mostConfirmations, percentage;
        connections = $scope.identityProfile.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.confirmations;
          $scope.$apply(function() {
            $scope.stats = {
              received_positive: c.pos,
              received_negative: c.neg,
              received_neutral: c.neut
            };
            return $scope.distance = c.dist;
          });
        } else {
          mostConfirmations = 1;
        }
        for (key in connections) {
          conn = connections[key];
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
            case 'coverPhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.coverPhoto = $scope.coverPhoto || {
                  'background-image': 'url(' + conn.val + ')'
                };
              }
              break;
            case 'profilePhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.profilePhoto = $scope.profilePhoto || conn.val;
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
            conn.link = conn.val;
            conn.linkName = conn.val;
            conn.iconStyle = 'glyphicon glyphicon-link';
            conn.btnStyle = 'btn-default';
          }
          if (conn.confirmations + conn.refutations > 0) {
            percentage = conn.confirmations * 100 / (conn.confirmations + conn.refutations);
            if (percentage >= 80) {
              alpha = conn.confirmations / mostConfirmations * 0.7 + 0.3;
            } else if (percentage >= 60) {
              conn.rowClass = 'warning';
            } else {
              conn.rowClass = 'danger';
            }
          }
          $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
        }
        return $scope.$apply(function() {
          $scope.connections = connections;
          $scope.getPhotosFromGravatar();
          return $scope.setPageTitle($scope.info.name || $scope.info.nickname || $scope.idValue);
        });
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
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
        email = $scope.info.email || $scope.idValue;
        return $scope.gravatar = CryptoJS.MD5(email).toString();
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.sent = [];
        $scope.received = [];
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
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
              $scope.getConnections();
              if (!(profile.sent && profile.received)) {
                throw new Error('missing sent or received index: ' + JSON.stringify(profile));
              }
              return $q.all([$window.merkleBtree.MerkleBTree.getByHash(profile.sent, $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash(profile.received, $scope.ipfsStorage)]);
            }).then(function(indexes) {
              $scope.sentIndex = indexes[0];
              $scope.receivedIndex = indexes[1];
              $scope.getReceivedMsgs(0);
              return $scope.getSentMsgs(0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxTQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFVBQWpCLEVBQTZCLE9BQTdCLEVBQXNDLFlBQXRDLEVBQW9ELFNBQXBELEVBQStELEtBQS9ELEVBQXNFLEVBQXRFLEVBQTBFLFFBQTFFLEVBQW9GLE1BQXBGO0FBQ0UsVUFBQTtNQUFBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQ25CLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUMsS0FBRDtlQUFXLE1BQU0sQ0FBQyxTQUFQLEdBQW1CO01BQTlCO01BQ3JCLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsS0FBUCxHQUFlO01BQ2YsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCO01BQ3JCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO01BQ3ZCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLElBQTJDLFlBQVksQ0FBQyxNQUF4RDtRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixZQUFZLENBQUMsT0FBakM7O01BQ0EsTUFBTSxDQUFDLFlBQVAsR0FD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RyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7ZUFDRSxNQUFNLENBQUMsT0FBUCxDQUFBLEVBREY7O0lBelNGLENBWm1FO0dBQXJFO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNvbmZpZykgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLmluZm8gPSB7fVxuICAgICRzY29wZS5zdGF0cyA9IHt9XG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0gW11cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLmRpc3RhbmNlID0gbnVsbFxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld0F0dHJpYnV0ZSA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIHZhbHVlOiAwXG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgIG1lc3NhZ2VzQWRkZWQgPSBmYWxzZVxuICAgICRzY29wZS4kb24gJ01lc3NhZ2VBZGRlZCcsIChldmVudCwgYXJncykgLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICBpZiBhcmdzLm1lc3NhZ2Uuc2lnbmVkRGF0YS50eXBlID09ICd2ZXJpZnlfaWRlbnRpdHknIGFuZCBub3QgYXJncy5pZC5jb25maXJtZWRcbiAgICAgICAgYXJncy5pZC5jb25maXJtZWQgPSB0cnVlXG4gICAgICAgIGFyZ3MuaWQuY29uZmlybWF0aW9ucyArPSAxXG4gICAgICAgIGlmICRzY29wZS5jb25uZWN0aW9ucyAmJiAkc2NvcGUuY29ubmVjdGlvbnMuaW5kZXhPZihhcmdzLmlkKSA9PSAtMVxuICAgICAgICAgICRzY29wZS5jb25uZWN0aW9ucy5wdXNoIGFyZ3MuaWRcbiAgICAgIGVsc2UgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSA9PSAndW52ZXJpZnlfaWRlbnRpdHknIGFuZCBub3QgYXJncy5pZC5yZWZ1dGVkXG4gICAgICAgIGFyZ3MuaWQucmVmdXRlZCA9IHRydWVcbiAgICAgICAgYXJncy5pZC5yZWZ1dGF0aW9ucyArPSAxXG4gICAgICAgIGlmICRzY29wZS5jb25uZWN0aW9ucy5pbmRleE9mKGFyZ3MuaWQpID09IC0xXG4gICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zLnB1c2ggYXJncy5pZFxuICAgICAgZWxzZSBpZiBhcmdzLm1lc3NhZ2Uuc2lnbmVkRGF0YS50eXBlID09ICdyYXRpbmcnXG4gICAgICAgIGlmIG1lc3NhZ2VzQWRkZWRcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuc2hpZnQoKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIFthcmdzLm1lc3NhZ2VdXG4gICAgICAgICRzY29wZS5yZWNlaXZlZC51bnNoaWZ0IGFyZ3MubWVzc2FnZVxuICAgICAgICBtZXNzYWdlc0FkZGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmFkZEVudHJ5ID0gKGV2ZW50LCBlbnRyeSkgLT5cbiAgICAgIHJlY2lwaWVudCA9IFtdXG4gICAgICBpZiBlbnRyeS5uYW1lXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnbmFtZScsIGVudHJ5Lm5hbWVdXG4gICAgICBpZiBlbnRyeS5lbWFpbFxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ2VtYWlsJywgZW50cnkuZW1haWxdXG4gICAgICBpZiBlbnRyeS51cmxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyd1cmwnLCBlbnRyeS51cmxdXG4gICAgICBpZiBlbnRyeS5waG9uZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ3Bob25lJywgZW50cnkucGhvbmVdXG4gICAgICBwYXJhbXMgPVxuICAgICAgICB0eXBlOiAndmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICByZWNpcGllbnQ6IHJlY2lwaWVudFxuICAgICAgJHNjb3BlLmNyZWF0ZShldmVudCwgcGFyYW1zKS50aGVuIChzdWNjZXNzKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ21lc3NhZ2VzLnNob3cnLCB7IGlkOiBzdWNjZXNzLmRhdGEuaGFzaCB9XG4gICAgICAsIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgXCJlcnJvclwiLCBlcnJvclxuXG4gICAgJHNjb3BlLmdldENvbm5lY3Rpb25zID0gLT5cbiAgICAgIGNvbm5lY3Rpb25zID0gJHNjb3BlLmlkZW50aXR5UHJvZmlsZS5hdHRycyBvciBbXVxuICAgICAgaWYgY29ubmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICBjID0gY29ubmVjdGlvbnNbMF1cbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZpcm1hdGlvbnNcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICRzY29wZS5zdGF0cyA9XG4gICAgICAgICAgICByZWNlaXZlZF9wb3NpdGl2ZTogYy5wb3NcbiAgICAgICAgICAgIHJlY2VpdmVkX25lZ2F0aXZlOiBjLm5lZ1xuICAgICAgICAgICAgcmVjZWl2ZWRfbmV1dHJhbDogYy5uZXV0XG4gICAgICAgICAgJHNjb3BlLmRpc3RhbmNlID0gYy5kaXN0XG4gICAgICBlbHNlXG4gICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgZm9yIGtleSBvZiBjb25uZWN0aW9uc1xuICAgICAgICBjb25uID0gY29ubmVjdGlvbnNba2V5XVxuICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdtYWlsdG86JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pbmZvLmVtYWlsID0gJHNjb3BlLmluZm8uZW1haWwgb3IgY29ubi52YWxcbiAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdncGdfZmluZ2VycHJpbnQnLCAnZ3BnX2tleWlkJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL3BncC5taXQuZWR1L3Brcy9sb29rdXA/b3A9Z2V0JnNlYXJjaD0weCcgKyBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICRzY29wZS5pbmZvLm5pY2tuYW1lID0gJHNjb3BlLmluZm8ubmlja25hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgJHNjb3BlLmluZm8ubmFtZSA9ICRzY29wZS5pbmZvLm5hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICd0ZWw6JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgY29ubi52YWwgKyAnKScgfVxuICAgICAgICAgIHdoZW4gJ3Byb2ZpbGVQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5wcm9maWxlUGhvdG8gPSAkc2NvcGUucHJvZmlsZVBob3RvIG9yIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi52YWwgYW5kIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWxcbiAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi5jb25maXJtYXRpb25zICsgY29ubi5yZWZ1dGF0aW9ucyA+IDBcbiAgICAgICAgICBwZXJjZW50YWdlID0gY29ubi5jb25maXJtYXRpb25zICogMTAwIC8gKGNvbm4uY29uZmlybWF0aW9ucyArIGNvbm4ucmVmdXRhdGlvbnMpXG4gICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmZpcm1hdGlvbnMgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgIyBjb25uLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0gY29ubmVjdGlvbnNcbiAgICAgICAgJHNjb3BlLmdldFBob3Rvc0Zyb21HcmF2YXRhcigpXG4gICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgKCRzY29wZS5pbmZvLm5hbWUgfHwgJHNjb3BlLmluZm8ubmlja25hbWUgfHwgJHNjb3BlLmlkVmFsdWUpXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MgPSAoaWQxLCBpZDIpIC0+XG4gICAgICBnZXRWZXJpZmljYXRpb25zID0gJHEgKHJlc29sdmUpIC0+XG4gICAgICAgIGlmICEkc2NvcGUudmVyaWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAxMDAwMCwgZmFsc2UsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgICAgIG1zZyA9IHJvdy52YWx1ZVxuICAgICAgICAgICAgICB1bmxlc3MgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgICAgICAgICBtc2cuc2lnbmVkRGF0YSA9IEtKVVIuandzLkpXUy5wYXJzZShtc2cuandzKS5wYXlsb2FkT2JqXG4gICAgICAgICAgICAgIGlmIChtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J10pXG4gICAgICAgICAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JFbWFpbCBvciBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMucHVzaCBtc2dcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkWzBdwqA9PSBpZDIubmFtZSBhbmQgaWRbMV0gPT0gaWQyLnZhbFxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5zZW50LmxvYWRpbmdcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLnNlbnQubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgJHNjb3BlLnNlbnRJbmRleC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgIHYgPSByb3cudmFsdWVcbiAgICAgICAgICB2LnNlYXJjaEtleSA9IHJvdy5rZXlcbiAgICAgICAgICBtc2dzLnB1c2ggdlxuICAgICAgICByZXR1cm4gbXNnc1xuICAgICAgLnRoZW4gKHNlbnQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgc2VudCwgeyByZWNpcGllbnRJc1NlbGY6IGZhbHNlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5zZW50LCBzZW50KVxuICAgICAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHNlbnQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmdcbiAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5yZWNlaXZlZC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgdiA9IHJvdy52YWx1ZVxuICAgICAgICAgIHYuc2VhcmNoS2V5ID0gcm93LmtleVxuICAgICAgICAgIG1zZ3MucHVzaCB2XG4gICAgICAgIHJldHVybiBtc2dzXG4gICAgICAudGhlbiAocmVjZWl2ZWQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgcmVjZWl2ZWQsIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5yZWNlaXZlZCwgcmVjZWl2ZWQpXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHJlY2VpdmVkLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAgIHNvcnRlZCA9IHJlY2VpdmVkLnNvcnQgKGEsYikgLT5cbiAgICAgICAgICAgIHJldHVybiAxIGlmIGEuZGlzdGFuY2UgPiBiLmRpc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gLTEgaWYgYS5kaXN0YW5jZSA8IGIuZGlzdGFuY2VcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgc29ydGVkLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoID49IDEyIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPj0gMTJcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLmRhdGEubWF4UmF0aW5nICsgbXNnLmRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICAgIGlmICRzY29wZS50aHVtYnNVcC5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzVXAucHVzaCBtc2dcbiAgICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kICBtc2cucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFBob3Rvc0Zyb21HcmF2YXRhciA9IC0+XG4gICAgICBlbWFpbCA9ICRzY29wZS5pbmZvLmVtYWlsIG9yICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoZW1haWwpLnRvU3RyaW5nKClcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSh7IHR5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZSB9KS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5UHJvZmlsZSA9IHByb2ZpbGVcbiAgICAgICAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICAgICAgICBpZiAhKHByb2ZpbGUuc2VudCBhbmQgcHJvZmlsZS5yZWNlaXZlZClcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzaW5nIHNlbnQgb3IgcmVjZWl2ZWQgaW5kZXg6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9maWxlKSlcbiAgICAgICAgICAgICRxLmFsbChbXG4gICAgICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKHByb2ZpbGUuc2VudCwgJHNjb3BlLmlwZnNTdG9yYWdlKSxcbiAgICAgICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2gocHJvZmlsZS5yZWNlaXZlZCwgJHNjb3BlLmlwZnNTdG9yYWdlKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAudGhlbiAoaW5kZXhlcykgLT5cbiAgICAgICAgICAgICRzY29wZS5zZW50SW5kZXggPSBpbmRleGVzWzBdXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleCA9IGluZGV4ZXNbMV1cbiAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MgMFxuICAgICAgICAgICAgJHNjb3BlLmdldFNlbnRNc2dzIDBcbiAgICAgICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBmZXRjaGluZyBwcm9maWxlJywgZXJyXG4gICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICdrZXlJRCcgYW5kICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5ub2RlSW5mby5rZXlJRFxuICAgICAgICAkc2NvcGUuZGlzdGFuY2UgPSAwXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maW5kT25lKClcbl1cbiJdfQ==

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
  angular.module('identifiAngular').constant('malarkey', malarkey).constant('moment', moment).constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFVBRFosRUFDd0IsUUFEeEIsQ0FFRSxDQUFDLFFBRkgsQ0FFWSxRQUZaLEVBRXNCLE1BRnRCLENBR0UsQ0FBQyxRQUhILENBR1ksUUFIWixFQUlJO0lBQUEsY0FBQSxFQUNFO01BQUEsSUFBQSxFQUFNLElBQU47TUFDQSxLQUFBLEVBQU8sRUFEUDtNQUVBLFlBQUEsRUFBYyxDQUZkO0tBREY7SUFJQSxvQkFBQSxFQUFzQixDQUNwQixPQURvQixFQUVwQixLQUZvQixFQUdwQixPQUhvQixFQUlwQixLQUpvQixFQUtwQixPQUxvQixFQU1wQixTQU5vQixFQU9wQixTQVBvQixFQVFwQixXQVJvQixFQVNwQixpQkFUb0IsQ0FKdEI7R0FKSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpXG4gIC5jb25zdGFudCAnbWFsYXJrZXknLCBtYWxhcmtleVxuICAuY29uc3RhbnQgJ21vbWVudCcsIG1vbWVudFxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider, toastrConfig) {
    'ngInject';
    $logProvider.debugEnabled(true);
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    return toastrConfig.progressBar = true;
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRCxFQUFlLFlBQWY7SUFDTjtJQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0lBRUEsWUFBWSxDQUFDLFNBQWIsR0FBeUI7SUFDekIsWUFBWSxDQUFDLE9BQWIsR0FBdUI7SUFDdkIsWUFBWSxDQUFDLGFBQWIsR0FBNkI7SUFDN0IsWUFBWSxDQUFDLGlCQUFiLEdBQWlDO1dBQ2pDLFlBQVksQ0FBQyxXQUFiLEdBQTJCO0VBVHJCLENBRFY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5jb25maWcgKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICAgIHRvYXN0ckNvbmZpZy5hbGxvd0h0bWwgPSB0cnVlXG4gICAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwXG4gICAgdG9hc3RyQ29uZmlnLnBvc2l0aW9uQ2xhc3MgPSAndG9hc3QtdG9wLXJpZ2h0J1xuICAgIHRvYXN0ckNvbmZpZy5wcmV2ZW50RHVwbGljYXRlcyA9IHRydWVcbiAgICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide="authentication.user || !nodeInfo.loginOptions.length"><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label><input type=text required autofocus id=idName name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label><input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label><input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label><input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user || !nodeInfo.loginOptions.length) || !(newEntry.email || newEntry.url || newEntry.phone) || (addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid)">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon id=result border=3 width=46 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.distance > 0" ng-bind="result.distance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.name|highlight:query.term ui-sref="identities.show({ type: result.linkTo.type, value: result.linkTo.value })"></a> <small ng-if=!result.name class=list-group-item-text><span ng-bind-html=result[0][0]|highlight:query.term></span></small><br><small><span ng-if="result.nickname && result.name != result.nickname" ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.email|highlight:query.term></span> </span><span ng-if=result.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.facebook|highlight:query.term></span> </span><span ng-if=result.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.twitter|highlight:query.term></span> </span><span ng-if=result.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.googlePlus|highlight:query.term></span> </span><span ng-if=result.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.bitcoin|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="!ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+stats.received_positive+stats.received_neutral+stats.received_negative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind=connections.length></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon id="{ gravatar: gravatar }" border=4 positive-score=stats.received_positive negative-score=stats.received_negative width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(info.name||info.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=info.name||info.nickname></span> <span ng-hide="!info.nickname || !info.name || info.nickname === info.name">(<span class=text-muted ng-bind=info.nickname></span>) </span><span ng-if="distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="distance > 0" ng-bind="distance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="stats.received_positive || stats.received_negative"><span ng-bind="stats.received_positive / (stats.received_positive+stats.received_neutral+stats.received_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.received_positive || stats.received_negative)">&mdash; </span></b><span ng-if="stats.sent_positive || stats.sent_negative"><br>Sent: <span ng-if="stats.sent_positive || stats.sent_negative"><span ng-bind="stats.sent_positive / (stats.sent_positive+stats.sent_neutral+stats.sent_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.sent_positive || stats.sent_negative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.received_positive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.received_neutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.received_negative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.sent_positive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.sent_neutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.sent_negative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && thumbsUp.length > 0" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div><div ng-if="isUniqueType && thumbsDown.length > 0" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span> <span class=visible-xs>Recv ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="create($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !receivedIndex || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.received_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.received_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.received_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!received.loading && received.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !sentIndex || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.sent_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.sent_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.sent_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sent.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connections.length > 0" ng-bind="connections.length - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" ng-if=!id.isCurrent style={{id.rowStyle}} ng-class=id.rowClass ng-click="connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="create($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="create($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon id=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="create($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { confirmations: 0, refutations: 0, type: newVerification.type, value: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>IPFS mirrors</h4><ul><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://ipfs.io/ipfs/QmZX1dGWHcsR3aNXUEhavoX6PTdYNqiR9RAvcn6Wyeo9Cn/ >https://ipfs.io/ipfs/QmZX1dGWHcsR3aNXUEhavoX6PTdYNqiR9RAvcn6Wyeo9Cn/</a></li></ul><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p><p>This Identifi user interface uses 3rd party authentication options and does not store login credentials.</p><h3>Node info</h3><pre ng-bind="nodeInfo | json"></pre></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><span class="distance-container mar-right10"><identicon id="{ gravatar: match.label.gravatar }" border=3 width=46 positive-score=match.label.pos negative-score=match.label.neg></identicon><span ng-if="match.label.distance >= 0" class=distance ng-bind="match.label.distance | ordinal"></span> </span><span ng-bind-html="match.label.name | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon id=nodeInfo.profile border=3 width=35 positive-score=nodeInfo.profile.pos negative-score=nodeInfo.profile.neg></identicon></span><span ng-bind=nodeInfo.profile.name></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message msg-data=msg ng-repeat="msg in msgs.list | filter:msgFilter" ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><span class="distance-container mar-right5"><identicon id=message.verifiedBy border=3 width=35 positive-score=message.verifiedBy.pos negative-score=message.verifiedBy.neg></identicon><span ng-if="message.verifiedBy.dist >= 0" class=distance ng-bind="message.verifiedBy.dist | ordinal"></span> </span><span ng-bind=message.verifiedBy.name></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.data.type == \'verify_identity\'}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': $ctrl.msgData.data.type != \'verify_identity\', \'panel-heading\': $ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\' }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><span class="distance-container mar-right10"><identicon id=$ctrl.msgData border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-if="$ctrl.msgData.distance >= 0" class=distance ng-bind="$ctrl.msgData.distance | ordinal"></span> </span><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block></a></p><p ng-if="$ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\'"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.data.type == \'verify_identity\'"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.data.type == \'unverify_identity\'"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);