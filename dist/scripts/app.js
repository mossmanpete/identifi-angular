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
      var jws, previousState, previousStateParams, privateKey, publicKey, scrollTo, token;
      $scope.authentication = {};
      $scope.localMessages = localStorageService.get('localMessages') || {};
      localStorageService.set('localMessages', $scope.localMessages);
      $scope.loginWithKey = function(privateKeyPEM, publicKeyPEM) {
        var publicKeyHash, publicKeyHex;
        $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM);
        $scope.publicKey = KEYUTIL.getKey(publicKeyPEM);
        localStorageService.set('privateKeyPEM', privateKeyPEM);
        localStorageService.set('publicKeyPEM', publicKeyPEM);
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
      publicKey = localStorageService.get('publicKeyPEM');
      if (privateKey && publicKey) {
        $scope.loginWithKey(privateKey, publicKey);
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
      $scope.ipfs.on('ready', function() {
        console.log($scope.ipfs);
        $window.ipfs = $scope.ipfs;
        $scope.ipfs.pubsub.subscribe('identifi', function(msg) {
          var hash, localMessages;
          msg = $scope.ipfs.types.Buffer(msg.data).toString();
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(msg));
          console.log('identifi message received', msg, hash);
          localMessages = localStorageService.get('localMessages');
          $scope.processMessages([msg]);
          localMessages[hash] = msg;
          return localStorageService.set('localMessages', localMessages);
        });
        return $scope.initIpfsIndexes();
      });
      $scope.initIpfsIndexes = function() {
        return $scope.getIpfsIndexes(['', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs'], ['https://identi.fi', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs'], ['https://ipfs.io', '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs']).then(function() {
          return $scope.apiReady = true;
        })["catch"](function(e) {
          console.log('initialization failed:', e);
          return $scope.apiReady = true;
        });
      };
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.getIpfsIndexes = function(indexRoot, fallbackIndexRoot, fallbackIndexRoot2) {
        var getBtreeOrFallback;
        getBtreeOrFallback = function(url, fallbackUrl, fallbackUrl2) {
          return $window.merkleBtree.MerkleBTree.getByHash(url, $scope.ipfsStorage)["catch"](function() {
            console.log('Failed to fetch index', url, ', reverting to', fallbackUrl);
            return $window.merkleBtree.MerkleBTree.getByHash(fallbackUrl, $scope.ipfsStorage);
          })["catch"](function() {
            console.log('Failed to fetch index', fallbackUrl, ', reverting to', fallbackUrl2);
            return $window.merkleBtree.MerkleBTree.getByHash(fallbackUrl2, $scope.ipfsStorage);
          });
        };
        console.log('Getting Identifi index from IPFS:', indexRoot.join(''));
        $scope.ipfsStorage = new $window.merkleBtree.IPFSStorage($scope.ipfs);
        return $q.all([$window.merkleBtree.MerkleBTree.getByHash('/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs/identities_by_distance', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash('/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs/identities_by_searchkey', $scope.ipfsStorage), $window.merkleBtree.MerkleBTree.getByHash('/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs/messages_by_timestamp', $scope.ipfsStorage)])["catch"](function(e) {
          console.log('Loading indexes via js-ipfs failed:', e);
          $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(indexRoot[0]);
          return $http.get(indexRoot.join('') + '/info');
        })["catch"](function() {
          console.log('Failed to fetch index', indexRoot.join('') + '/info,', 'reverting to', fallbackIndexRoot.join('') + '/info');
          $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(fallbackIndexRoot[0]);
          return $http.get(fallbackIndexRoot.join('') + '/info');
        })["catch"](function() {
          console.log('Failed to fetch index', fallbackIndexRoot.join('') + '/info,', 'reverting to', fallbackIndexRoot2.join('') + '/info');
          $scope.ipfsStorage = new $window.merkleBtree.IPFSGatewayStorage(fallbackIndexRoot[1]);
          return $http.get(fallbackIndexRoot2.join('') + '/info');
        }).then(function(res) {
          $scope.nodeInfo = {};
          $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID]);
          return $q.all([getBtreeOrFallback(indexRoot[1] + '/identities_by_distance', fallbackIndexRoot[1] + '/identities_by_distance', fallbackIndexRoot2[1] + '/identities_by_distance'), getBtreeOrFallback(indexRoot[1] + '/identities_by_searchkey', fallbackIndexRoot[1] + '/identities_by_searchkey', fallbackIndexRoot2[1] + '/identities_by_searchkey'), getBtreeOrFallback(indexRoot[1] + '/messages_by_timestamp', fallbackIndexRoot[1] + '/messages_by_timestamp', fallbackIndexRoot2[1] + '/messages_by_timestamp')]);
        }).then(function(results) {
          $scope.identitiesByDistance = results[0];
          $scope.identitiesBySearchKey = results[1];
          return $scope.messageIndex = results[2];
        }).then(function() {
          var host, path;
          path = $location.absUrl();
          host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi' : '';
          return $http.get(host + '/api', {
            timeout: 2000
          });
        }).then(function(res) {
          return $scope.nodeInfo = angular.extend($scope.nodeInfo, res.data);
        })["catch"](function(res) {
          return $scope.nodeInfo = {
            loginOptions: [true]
          };
        });
      };
      $scope.ipfsGet = function(uri) {
        return $scope.ipfs.files.cat(uri).then(function(stream) {
          return new Promise(function(resolve, reject) {
            stream.on('data', function(file) {
              file = $scope.ipfs.types.Buffer(file).toString();
              return resolve(file);
            });
            return stream.on('error', function(error) {
              return reject(error);
            });
          });
        });
      };
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.create = function(event, params, id) {
        var hash, header, message, options, payload, publicKeyHash, publicKeyHex, r;
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
        } else {
          options = {
            headers: {
              'Authorization': 'Bearer ' + $scope.authentication.token
            }
          };
        }
        r = $scope.ipfs.files.add(new $scope.ipfs.types.Buffer(jws)).then(function(i) {
          return $scope.ipfs.pubsub.publish('identifi', new $scope.ipfs.types.Buffer(jws));
        }).then(function() {
          return $http.post('/api/messages', message, options);
        })["catch"](function() {
          return $http.post('https://identi.fi/api/messages', message, options);
        });
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
            $scope.getIpfsIndexes($scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot);
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
        $scope.privateKeyPEM = KEYUTIL.getPEM($scope.privateKey, 'PKCS8PRV');
        return $scope.publicKeyPEM = KEYUTIL.getPEM($scope.publicKey);
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
            return $scope.ipfsGet(res[0].value).then(function(res) {
              return {
                data: JSON.parse(res)
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
            p = $scope.ipfsGet(row.value).then(function(row) {
              var identity, smallestIndex;
              identity = {
                searchKey: searchKey
              };
              smallestIndex = 1000;
              angular.forEach(JSON.parse(row).attrs, function(attr) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFlN0QsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUNBLG1CQURBLEVBQ3FCLFNBRHJCLEVBQ2dDLE9BRGhDLEVBQ3lDLEVBRHpDOztBQUVFOzs7Ozs7Ozs7QUFBQSxVQUFBO01BV0EsTUFBTSxDQUFDLGNBQVAsR0FBd0I7TUFDeEIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztNQUNuRSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxNQUFNLENBQUMsYUFBaEQ7TUFFQSxNQUFNLENBQUMsWUFBUCxHQUFzQixTQUFDLGFBQUQsRUFBZ0IsWUFBaEI7QUFDcEIsWUFBQTtRQUFBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE9BQU8sQ0FBQyw4QkFBUixDQUF1QyxhQUF2QztRQUNwQixNQUFNLENBQUMsU0FBUCxHQUFtQixPQUFPLENBQUMsTUFBUixDQUFlLFlBQWY7UUFDbkIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsYUFBekM7UUFDQSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixjQUF4QixFQUF3QyxZQUF4QztRQUNBLFlBQUEsR0FBZSxPQUFPLENBQUMsYUFBUixDQUFz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LGVBdUJXLEVBdkJYO0FBQUEsZUF1QmUsRUF2QmY7QUFBQSxlQXVCbUIsRUF2Qm5CO0FBQUEsZUF1QnVCLEVBdkJ2QjtBQUFBLGVBdUIyQixFQXZCM0I7QUF1QjJCO0FBdkIzQjtZQXlCSSxFQUFBLEdBQUssT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsS0FBSyxDQUFDLGFBQXRCO1lBQ0wsWUFBQSxDQUFhLE1BQU0sQ0FBQyxLQUFwQjtZQUNBLElBQUEsR0FBTyxVQUFBLENBQVcsQ0FBQyxTQUFBO2NBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixFQUFFLENBQUMsR0FBSCxDQUFBO2NBQ3BCLE1BQU0sQ0FBQyxNQUFQLENBQUE7WUFGaUIsQ0FBRCxDQUFYLEVBSUosR0FKSTtZQUtQLE1BQU0sQ0FBQyxLQUFQLEdBQWU7QUFDZjtBQWpDSjtNQURxQjthQW9DdkIsTUFBTSxDQUFDLG9CQUFQLEdBQThCLFNBQUMsSUFBRDtRQUM1QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO1VBQUUsSUFBQSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBN0M7U0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQW5sQmhDLENBZjZEO0dBQS9EO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRxJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsICR1aWJNb2RhbCwgJHdpbmRvdywgJHEpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgIyMjXG4gICAgUGVyc29uYS53YXRjaFxuICAgICAgbG9nZ2VkSW5Vc2VyOiBBdXRoZW50aWNhdGlvbi51c2VyLmVtYWlsXG4gICAgICBvbmxvZ2luOiAoYXNzZXJ0aW9uKSAtPlxuICAgICAgICAkaHR0cC5wb3N0KCcvYXV0aC9wZXJzb25hJywgYXNzZXJ0aW9uOiBhc3NlcnRpb24pLnRoZW4gLT5cbiAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgICMgRklYTUVcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ubG9nb3V0OiAtPlxuICAgICMjI1xuXG4gICAgIyBzZXQgYXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fSAjIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmxvY2FsTWVzc2FnZXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpIG9yIHt9XG4gICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcblxuICAgICRzY29wZS5sb2dpbldpdGhLZXkgPSAocHJpdmF0ZUtleVBFTSwgcHVibGljS2V5UEVNKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBLRVlVVElMLmdldEtleUZyb21QbGFpblByaXZhdGVQS0NTOFBFTShwcml2YXRlS2V5UEVNKVxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IEtFWVVUSUwuZ2V0S2V5KHB1YmxpY0tleVBFTSlcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdwcml2YXRlS2V5UEVNJywgcHJpdmF0ZUtleVBFTSlcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdwdWJsaWNLZXlQRU0nLCBwdWJsaWNLZXlQRU0pXG4gICAgICBwdWJsaWNLZXlIZXggPSBLRVlVVElMLmdldEhleEZyb21QRU0oS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSkpXG4gICAgICBwdWJsaWNLZXlIYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KHB1YmxpY0tleUhleCkpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiBwdWJsaWNLZXlIYXNoXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG5cbiAgICBwcml2YXRlS2V5ID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3ByaXZhdGVLZXlQRU0nKVxuICAgIHB1YmxpY0tleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdwdWJsaWNLZXlQRU0nKVxuICAgIGlmIHByaXZhdGVLZXkgYW5kIHB1YmxpY0tleVxuICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShwcml2YXRlS2V5LCBwdWJsaWNLZXkpXG4gICAgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW5cbiAgICBpZiB0b2tlblxuICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlblxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPSBqd3MudXNlclxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICBwcmV2aW91c1N0YXRlID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRlJykgfHwgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgIHByZXZpb3VzU3RhdGVQYXJhbXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3RhdGVQYXJhbXMnKSB8fCB7fVxuICAgICAgJHN0YXRlLmdvKHByZXZpb3VzU3RhdGUsIHByZXZpb3VzU3RhdGVQYXJhbXMpXG4gICAgZWxzZVxuICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKVxuICAgICAgaWYgdG9rZW5cbiAgICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi50b2tlbiA9IHRva2VuXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID0gandzLnVzZXJcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgRVhQRVJJTUVOVEFMOiB7XG4gICAgICAgIHB1YnN1YjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmcy10ZXN0aW5nJ1xuICAgICAgY29uZmlnOiBCb290c3RyYXA6IFtcbiAgICAgICAgJy9kbnM0L2Ftcy0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTGVyMjY1TlJnU3AyTEEzZFBhZXlraVMxSjZEaWZUQzg4ZjV1VlFLTkFkJ1xuICAgICAgICAnL2RuczQvc2ZvLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29ManU2bTd4VGgzRHVva3ZUMzg4NlFSWXF4QXpiMWtTaGFhbkpnVzM2eXgnXG4gICAgICAgICcvZG5zNC9sb24tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xNZVdxQjdZR1ZMSk4zcE5MUXBtbUVrMzV2NndZdHNNR0x6U3I1UUJVMydcbiAgICAgICAgJy9kbnM0L3Nmby0yLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTG5TR2NjRnVaUUp6UmFkSG45NVcyQ3JTRm1adVRkRFdQOEhYYUhjYTl6J1xuICAgICAgICAnL2RuczQvc2ZvLTMuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MUHBwdUJ0UVNHd0tEWlQyTTczVUxwanZmZDNhWjZoYTRvRkdMMUtyR00nXG4gICAgICAgICcvZG5zNC9zZ3AtMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xTYWZUTUJzUEthZFRFZ2FYY3REUVZjcU44OENOTEhYTWtUTndNS1BudSdcbiAgICAgICAgJy9kbnM0L255Yy0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTHVlUjR4QmVVYlk5V1o5eEdVVXh1bmJLV2NyTkZUREFhZFFKbW9jbldtJ1xuICAgICAgICAnL2RuczQvbnljLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MVjRCYm01MWpNOUM0Z0RZWlE5Q3kzVTZhWE1KREFiemd1MmZ6YURzNjQnXG4gICAgICBdKVxuXG4gICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgIGNvbnNvbGUubG9nICRzY29wZS5pcGZzXG4gICAgICAkd2luZG93LmlwZnMgPSAkc2NvcGUuaXBmc1xuICAgICAgJHNjb3BlLmlwZnMucHVic3ViLnN1YnNjcmliZSAnaWRlbnRpZmknLCAobXNnKSAtPlxuICAgICAgICBtc2cgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIobXNnLmRhdGEpLnRvU3RyaW5nKClcbiAgICAgICAgaGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1Nihtc2cpKVxuICAgICAgICBjb25zb2xlLmxvZyAnaWRlbnRpZmkgbWVzc2FnZSByZWNlaXZlZCcsIG1zZywgaGFzaFxuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttc2ddKVxuICAgICAgICBsb2NhbE1lc3NhZ2VzW2hhc2hdwqA9IG1zZ1xuICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsIGxvY2FsTWVzc2FnZXMpXG4gICAgICAkc2NvcGUuaW5pdElwZnNJbmRleGVzKClcblxuICAgICRzY29wZS5pbml0SXBmc0luZGV4ZXMgPSAtPlxuICAgICAgJHNjb3BlLmdldElwZnNJbmRleGVzIFsnJywgJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXSxcbiAgICAgICAgWydodHRwczovL2lkZW50aS5maScsICcvaXBucy9RbWJiMURSd2Q3NXJaazVUb3RUWEpZekRTSkw2QmFOVDFEQVE2VmJLY0tMaGJzJ10sXG4gICAgICAgIFsnaHR0cHM6Ly9pcGZzLmlvJywgJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXVxuICAgICAgLnRoZW4gLT5cbiAgICAgICAgJHNjb3BlLmFwaVJlYWR5ID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnaW5pdGlhbGl6YXRpb24gZmFpbGVkOicsIGVcbiAgICAgICAgJHNjb3BlLmFwaVJlYWR5ID0gdHJ1ZVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lkZW50aWZpJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuZ2V0SXBmc0luZGV4ZXMgPSAoaW5kZXhSb290LCBmYWxsYmFja0luZGV4Um9vdCwgZmFsbGJhY2tJbmRleFJvb3QyKSAtPlxuICAgICAgZ2V0QnRyZWVPckZhbGxiYWNrID0gKHVybCwgZmFsbGJhY2tVcmwsIGZhbGxiYWNrVXJsMikgLT5cbiAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2godXJsLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLmNhdGNoIC0+XG4gICAgICAgICAgY29uc29sZS5sb2cgJ0ZhaWxlZCB0byBmZXRjaCBpbmRleCcsIHVybCwgJywgcmV2ZXJ0aW5nIHRvJywgZmFsbGJhY2tVcmxcbiAgICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChmYWxsYmFja1VybCwgJHNjb3BlLmlwZnNTdG9yYWdlKVxuICAgICAgICAuY2F0Y2ggLT5cbiAgICAgICAgICBjb25zb2xlLmxvZyAnRmFpbGVkIHRvIGZldGNoIGluZGV4JywgZmFsbGJhY2tVcmwsICcsIHJldmVydGluZyB0bycsIGZhbGxiYWNrVXJsMlxuICAgICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKGZhbGxiYWNrVXJsMiwgJHNjb3BlLmlwZnNTdG9yYWdlKVxuXG4gICAgICBjb25zb2xlLmxvZyAnR2V0dGluZyBJZGVudGlmaSBpbmRleCBmcm9tIElQRlM6JywgaW5kZXhSb290LmpvaW4oJycpXG4gICAgICAkc2NvcGUuaXBmc1N0b3JhZ2UgPSBuZXcgJHdpbmRvdy5tZXJrbGVCdHJlZS5JUEZTU3RvcmFnZSgkc2NvcGUuaXBmcylcbiAgICAgICMgRmlyc3QgYXR0ZW1wdCB0byBsb2FkIGluZGV4ZXMgdmlhIGpzLWlwZnNcbiAgICAgICRxLmFsbChbXG4gICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKCcvaXBucy9RbWJiMURSd2Q3NXJaazVUb3RUWEpZekRTSkw2QmFOVDFEQVE2VmJLY0tMaGJzL2lkZW50aXRpZXNfYnlfZGlzdGFuY2UnLCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaCgnL2lwbnMvUW1iYjFEUndkNzVyWms1VG90VFhKWXpEU0pMNkJhTlQxREFRNlZiS2NLTGhicy9pZGVudGl0aWVzX2J5X3NlYXJjaGtleScsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICAgICR3aW5kb3cubWVya2xlQnRyZWUuTWVya2xlQlRyZWUuZ2V0QnlIYXNoKCcvaXBucy9RbWJiMURSd2Q3NXJaazVUb3RUWEpZekRTSkw2QmFOVDFEQVE2VmJLY0tMaGJzL21lc3NhZ2VzX2J5X3RpbWVzdGFtcCcsICRzY29wZS5pcGZzU3RvcmFnZSksXG4gICAgICBdKVxuICAgICAgIyBJZiBmYWlscywgdHJ5IGxvYWRpbmcgaW5kZXhlcyB2aWEgZ2F0ZXdheXNcbiAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ0xvYWRpbmcgaW5kZXhlcyB2aWEganMtaXBmcyBmYWlsZWQ6JywgZVxuICAgICAgICAkc2NvcGUuaXBmc1N0b3JhZ2UgPSBuZXcgJHdpbmRvdy5tZXJrbGVCdHJlZS5JUEZTR2F0ZXdheVN0b3JhZ2UoaW5kZXhSb290WzBdKVxuICAgICAgICAkaHR0cC5nZXQoaW5kZXhSb290LmpvaW4oJycpICsgJy9pbmZvJylcbiAgICAgIC5jYXRjaCAtPlxuICAgICAgICAgIGNvbnNvbGUubG9nICdGYWlsZWQgdG8gZmV0Y2ggaW5kZXgnLCBpbmRleFJvb3Quam9pbignJykgKyAnL2luZm8sJywgJ3JldmVydGluZyB0bycsIGZhbGxiYWNrSW5kZXhSb290LmpvaW4oJycpICsgJy9pbmZvJ1xuICAgICAgICAgICRzY29wZS5pcGZzU3RvcmFnZSA9IG5ldyAkd2luZG93Lm1lcmtsZUJ0cmVlLklQRlNHYXRld2F5U3RvcmFnZShmYWxsYmFja0luZGV4Um9vdFswXSlcbiAgICAgICAgICAkaHR0cC5nZXQoZmFsbGJhY2tJbmRleFJvb3Quam9pbignJykgKyAnL2luZm8nKVxuICAgICAgLmNhdGNoIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdGYWlsZWQgdG8gZmV0Y2ggaW5kZXgnLCBmYWxsYmFja0luZGV4Um9vdC5qb2luKCcnKSArICcvaW5mbywnLCAncmV2ZXJ0aW5nIHRvJywgZmFsbGJhY2tJbmRleFJvb3QyLmpvaW4oJycpICsgJy9pbmZvJ1xuICAgICAgICAkc2NvcGUuaXBmc1N0b3JhZ2UgPSBuZXcgJHdpbmRvdy5tZXJrbGVCdHJlZS5JUEZTR2F0ZXdheVN0b3JhZ2UoZmFsbGJhY2tJbmRleFJvb3RbMV0pXG4gICAgICAgICRodHRwLmdldChmYWxsYmFja0luZGV4Um9vdDIuam9pbignJykgKyAnL2luZm8nKVxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLm5vZGVJbmZvID0ge31cbiAgICAgICAgJHNjb3BlLm5vZGVJbmZvLnByb2ZpbGUgPSAkc2NvcGUucHJvZmlsZUZyb21EYXRhKHJlcy5kYXRhLCBbJ2tleUlEJywgcmVzLmRhdGEua2V5SURdKVxuICAgICAgICAkcS5hbGwoW1xuICAgICAgICAgIGdldEJ0cmVlT3JGYWxsYmFjayhpbmRleFJvb3RbMV0gKyAnL2lkZW50aXRpZXNfYnlfZGlzdGFuY2UnLFxuICAgICAgICAgICAgZmFsbGJhY2tJbmRleFJvb3RbMV0gKyAnL2lkZW50aXRpZXNfYnlfZGlzdGFuY2UnLFxuICAgICAgICAgICAgZmFsbGJhY2tJbmRleFJvb3QyWzFdICsgJy9pZGVudGl0aWVzX2J5X2Rpc3RhbmNlJyksXG4gICAgICAgICAgZ2V0QnRyZWVPckZhbGxiYWNrKGluZGV4Um9vdFsxXSArICcvaWRlbnRpdGllc19ieV9zZWFyY2hrZXknLFxuICAgICAgICAgICAgZmFsbGJhY2tJbmRleFJvb3RbMV0gKyAnL2lkZW50aXRpZXNfYnlfc2VhcmNoa2V5JyxcbiAgICAgICAgICAgIGZhbGxiYWNrSW5kZXhSb290MlsxXSArICcvaWRlbnRpdGllc19ieV9zZWFyY2hrZXknKSxcbiAgICAgICAgICBnZXRCdHJlZU9yRmFsbGJhY2soaW5kZXhSb290WzFdICsgJy9tZXNzYWdlc19ieV90aW1lc3RhbXAnLFxuICAgICAgICAgICAgZmFsbGJhY2tJbmRleFJvb3RbMV0gKyAnL21lc3NhZ2VzX2J5X3RpbWVzdGFtcCcsXG4gICAgICAgICAgICBmYWxsYmFja0luZGV4Um9vdDJbMV0gKyAnL21lc3NhZ2VzX2J5X3RpbWVzdGFtcCcpLFxuICAgICAgICBdKVxuICAgICAgLnRoZW4gKHJlc3VsdHMpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlEaXN0YW5jZSA9IHJlc3VsdHNbMF1cbiAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleSA9IHJlc3VsdHNbMV1cbiAgICAgICAgJHNjb3BlLm1lc3NhZ2VJbmRleCA9IHJlc3VsdHNbMl1cbiAgICAgIC50aGVuIC0+XG4gICAgICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICAgICAgaG9zdCA9IGlmIHBhdGgubWF0Y2ggL1xcL2lwW25mXXNcXC8vIHRoZW4gJ2h0dHBzOi8vaWRlbnRpLmZpJyBlbHNlICcnXG4gICAgICAgICRodHRwLmdldChob3N0ICsgJy9hcGknLCB7IHRpbWVvdXQ6IDIwMDAgfSlcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgICRzY29wZS5ub2RlSW5mbyA9IGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5ub2RlSW5mbywgcmVzLmRhdGFcbiAgICAgIC5jYXRjaCAocmVzKSAtPlxuICAgICAgICAkc2NvcGUubm9kZUluZm8gPSB7IGxvZ2luT3B0aW9uczogW3RydWVdIH1cblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSkgLT5cbiAgICAgICRzY29wZS5pcGZzLmZpbGVzLmNhdCh1cmkpLnRoZW4gKHN0cmVhbSkgLT5cbiAgICAgICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgICBzdHJlYW0ub24gJ2RhdGEnLCAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICAgIHN0cmVhbS5vbiAnZXJyb3InLCAoZXJyb3IpIC0+XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpXG5cbiAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICByYXRpbmc6IDFcbiAgICAgIGNvbW1lbnQ6ICcnXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlID0gKGV2ZW50LCBwYXJhbXMsIGlkKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGNvbnRleHQ6ICdpZGVudGlmaSdcblxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgYW5ndWxhci5leHRlbmQgbWVzc2FnZSxcbiAgICAgICAgICBtYXhSYXRpbmc6IDNcbiAgICAgICAgICBtaW5SYXRpbmc6IC0zXG4gICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLCBwYXJhbXNcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgaWYgJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICAgcHVibGljS2V5SGV4ID0gS0VZVVRJTC5nZXRIZXhGcm9tUEVNKEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wdWJsaWNLZXkpKVxuICAgICAgICBwdWJsaWNLZXlIYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KHB1YmxpY0tleUhleCkpXG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yID0gW1sna2V5SUQnLCBwdWJsaWNLZXlIYXNoXV1cbiAgICAgICAgbWVzc2FnZS50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgaGVhZGVyID0gSlNPTi5zdHJpbmdpZnkoeyBhbGc6ICdFUzI1NicsIGtpZDogcHVibGljS2V5SGV4IH0pXG4gICAgICAgIHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKVxuICAgICAgICBqd3MgPSBLSlVSLmp3cy5KV1Muc2lnbihcIkVTMjU2XCIsIGhlYWRlciwgcGF5bG9hZCwgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYoandzKSlcbiAgICAgICAgbWVzc2FnZSA9IHsgandzOiBqd3MsIGhhc2g6IGhhc2ggfVxuICAgICAgZWxzZVxuICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICBoZWFkZXJzOlxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW5cbiAgICAgIHIgPSAkc2NvcGUuaXBmcy5maWxlcy5hZGQobmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKS50aGVuIChpKSAtPlxuICAgICAgICRzY29wZS5pcGZzLnB1YnN1Yi5wdWJsaXNoKCdpZGVudGlmaScsIG5ldyAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoandzKSlcbiAgICAgIC50aGVuIC0+XG4gICAgICAgICRodHRwLnBvc3QoJy9hcGkvbWVzc2FnZXMnLCBtZXNzYWdlLCBvcHRpb25zKVxuICAgICAgLmNhdGNoIC0+XG4gICAgICAgICRodHRwLnBvc3QoJ2h0dHBzOi8vaWRlbnRpLmZpL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICByLnRoZW4gKChyZXNwb25zZSkgLT5cbiAgICAgICAgIyBDbGVhciBmb3JtIGZpZWxkc1xuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5jb21tZW50ID0gJydcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2UucmF0aW5nID0gMVxuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGUgPSAnJ1xuICAgICAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnZhbHVlID0gJydcbiAgICAgICAgJHNjb3BlLiRyb290LiRicm9hZGNhc3QgJ01lc3NhZ2VBZGRlZCcsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YVxuICAgICAgICAgIGlkOiBpZFxuICAgICAgICAkc2NvcGUuZ2V0SXBmc0luZGV4ZXMgJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHJlc3BvbnNlLmRhdGEuaXBmc0luZGV4Um9vdCBpZiByZXNwb25zZS5kYXRhLmlwZnNJbmRleFJvb3RcbiAgICAgICAgcmV0dXJuXG4gICAgICApLCAoZXJyb3JSZXNwb25zZSkgLT5cbiAgICAgICAgJHNjb3BlLmVycm9yID0gZXJyb3JSZXNwb25zZS5kYXRhIHx8IEpTT04uc3RyaW5naWZ5KGVycm9yUmVzcG9uc2UpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuIHJcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dpbk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5nZW5lcmF0ZUtleSA9IC0+XG4gICAgICBrZXlwYWlyID0gS0VZVVRJTC5nZW5lcmF0ZUtleXBhaXIoJ0VDJywgJ3NlY3AyNTZrMScpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleXBhaXIucHJ2S2V5T2JqXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0ga2V5cGFpci5wdWJLZXlPYmpcbiAgICAgICRzY29wZS5wcml2YXRlS2V5UEVNID0gS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnByaXZhdGVLZXksICdQS0NTOFBSVicpXG4gICAgICAkc2NvcGUucHVibGljS2V5UEVNID0gS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSlcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlQRU0gPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuZGlzdGFuY2UgIT0gJ251bWJlcidcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPiAwIGFuZCB2YWx1ZS5kaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUubG9nb0NsaWNrZWQgPSAtPlxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAgIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCdcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLmRhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5wcm9maWxlRnJvbURhdGEgPSAoZGF0YSwgZmFsbGJhY2tJZCkgLT5cbiAgICAgIGlmIGRhdGEuYXR0cnMgYW5kIGRhdGEuYXR0cnMubGVuZ3RoXG4gICAgICAgIGRhdGEuZGlzdCA9IGRhdGEuYXR0cnNbMF0uZGlzdCArIDBcbiAgICAgICAgZGF0YS5wb3MgPSBkYXRhLmF0dHJzWzBdLnBvc1xuICAgICAgICBkYXRhLm5lZyA9IGRhdGEuYXR0cnNbMF0ubmVnXG4gICAgICAgIGZvciBrLCB2IG9mIGRhdGEuYXR0cnNcbiAgICAgICAgICBzd2l0Y2ggdi5uYW1lXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICBkYXRhLm5hbWUgPSB2LnZhbCB1bmxlc3MgZGF0YS5uYW1lXG4gICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgZGF0YS5uaWNrbmFtZSA9IHYudmFsIHVubGVzcyBkYXRhLm5pY2tuYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgZGF0YS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENSh2LnZhbCkudG9TdHJpbmcoKVxuICAgICAgZGF0YS5uYW1lID0gZGF0YS5uaWNrbmFtZSBpZiBkYXRhLm5pY2tuYW1lIGFuZCBub3QgZGF0YS5uYW1lXG4gICAgICBkYXRhLm5hbWUgPSBmYWxsYmFja0lkLnZhbHVlIHVubGVzcyBkYXRhLm5hbWVcbiAgICAgIGRhdGEuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoZmFsbGJhY2tJZC52YWx1ZSkudG9TdHJpbmcoKSB1bmxlc3MgZGF0YS5ncmF2YXRhclxuICAgICAgcmV0dXJuIGRhdGFcblxuICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgPSAoaWQsIGNhbGxiYWNrKSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeVNlYXJjaEtleS5zZWFyY2hUZXh0KGVuY29kZVVSSUNvbXBvbmVudChpZC52YWx1ZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudHlwZSksIDEpXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBpZiByZXMubGVuZ3RoXG4gICAgICAgICAgcmV0dXJuICRzY29wZS5pcGZzR2V0KHJlc1swXS52YWx1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgcmV0dXJuIHsgZGF0YTogSlNPTi5wYXJzZShyZXMpIH1cbiAgICAgICAgICAjIHJldHVybiAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHJlc1swXS52YWx1ZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiB7IGRhdGE6IHt9IH1cbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIHByb2ZpbGUgPSAkc2NvcGUucHJvZmlsZUZyb21EYXRhKHJlcy5kYXRhLCBpZClcbiAgICAgICAgaWYgY2FsbGJhY2tcbiAgICAgICAgICByZXR1cm4gY2FsbGJhY2socHJvZmlsZSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJldHVybiBwcm9maWxlXG5cbiAgICAkc2NvcGUub3Blbk1lc3NhZ2UgPSAoZXZlbnQsIG1lc3NhZ2UsIHNpemUpIC0+XG4gICAgICB0ID0gZXZlbnQudGFyZ2V0XG4gICAgICByZXR1cm4gaWYgYW5ndWxhci5lbGVtZW50KHQpLmNsb3Nlc3QoJ2EnKS5sZW5ndGhcbiAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKG1lc3NhZ2UpXG4gICAgICAkc2NvcGUubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmhhc1ZhbGlkU2lnbmF0dXJlKG1lc3NhZ2UpXG4gICAgICAkc2NvcGUuZ2V0SWRlbnRpdHlQcm9maWxlIHsgdHlwZTogJ2tleUlEJywgdmFsdWU6ICRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZCB9LCAocHJvZmlsZSkgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuICAgICAgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgbW9kYWxJbnN0YW5jZS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgIG1vZGFsSW5zdGFuY2UuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmZpbHRlcnMgPSAkc2NvcGUuZmlsdGVycyBvciBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICMjI1xuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IEF1dGhlbnRpY2F0aW9uXG4gICAgaWYgQXV0aGVudGljYXRpb24udXNlclxuICAgICAgaWYgQXV0aGVudGljYXRpb24udXNlci5wcm92aWRlciA9PSAncGVyc29uYSdcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAnZW1haWwnXG4gICAgICBlbHNlXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlID0gJ3VybCdcbiAgICAgIHN3aXRjaCBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyXG4gICAgICAgIHdoZW4gJ3BlcnNvbmEnXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyBBdXRoZW50aWNhdGlvbi51c2VyLnVzZXJuYW1lXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyRGF0YS5saW5rXG4gICAgICAgICAgYnJlYWtcbiAgICAjIyNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5oYXNWYWxpZFNpZ25hdHVyZSA9IChtc2csIHBhcnNlZEp3cykgLT5cbiAgICAgIHBhcnNlZEp3cyA9IHBhcnNlZEp3cyBvciBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgIHBlbSA9IEtKVVIuYXNuMS5BU04xVXRpbC5nZXRQRU1TdHJpbmdGcm9tSGV4KHBhcnNlZEp3cy5oZWFkZXJPYmoua2lkLCBcIlBVQkxJQyBLRVlcIilcbiAgICAgIHB1YktleSA9IEtFWVVUSUwuZ2V0S2V5KHBlbSlcbiAgICAgIGlzVmFsaWQgPSBLSlVSLmp3cy5KV1MudmVyaWZ5KG1zZy5qd3MsIHB1YktleSwgWydFUzI1NiddKVxuICAgICAgaWYgaXNWYWxpZCB0aGVuIGNvbnNvbGUubG9nICd2YWxpZCBzaWduYXR1cmUnIGVsc2UgY29uc29sZS5lcnJvciAnaW52YWxpZCBzaWduYXR1cmUnXG4gICAgICByZXR1cm4gaXNWYWxpZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgdmVyaWZ5U2lnbmF0dXJlKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBwYXJzZWRKd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgICAgbXNnLmRhdGEgPSBwYXJzZWRKd3MucGF5bG9hZE9ialxuICAgICAgICB1bmxlc3MgbXNnLnNpZ25lcl9rZXlpZFxuICAgICAgICAgIGtleUhhc2ggPSBDcnlwdG9KUy5TSEEyNTYocGFyc2VkSndzLmhlYWRlck9iai5raWQpXG4gICAgICAgICAgbXNnLnNpZ25lcl9rZXlpZCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KGtleUhhc2gpXG5cbiAgICAgICAgcmV0dXJuIGlmIHZlcmlmeVNpZ25hdHVyZSBhbmQgbm90ICRzY29wZS5oYXNWYWxpZFNpZ25hdHVyZShtc2csIHBhcnNlZEp3cykgIyBUT0RPOiBzaG91bGQgZGlzcGxheSB3YXJuaW5nIG9yIGhpZGUgbXNnIG9yIHN0aFxuXG4gICAgICAgIG1zZy5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShtc2cuYXV0aG9yX2VtYWlsIHx8IG1zZy5kYXRhLmF1dGhvclswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLmF1dGhvcltpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvcltpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBzaWduZWREYXRhID0gbXNnLmRhdGFcbiAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJydcbiAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgIHN3aXRjaCBzaWduZWREYXRhLnR5cGVcbiAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2sgcG9zaXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICB3aGVuICdjb25uZWN0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgd2hlbiAndW52ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLWVycm9yJ1xuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI0ZGRjBERTtib3JkZXItY29sb3I6I0ZGRTJDNjsnXG4gICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgcmF0aW5nID0gc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBzaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgaWYgbXNnLmlwZnNfaGFzaCBhbmQgbm90IG1zZy5qd3NcbiAgICAgICAgICAkc2NvcGUuaXBmc0dldChtc2cuaXBmc19oYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICBtc2cuandzID0gcmVzXG4gICAgICAgICAgICBwcm9jZXNzTWVzc2FnZShtc2cpXG4gICAgICAgIGVsc2UgcHJvY2Vzc01lc3NhZ2UobXNnKVxuXG4gICAgIyBDb2xsYXBzaW5nIHRoZSBtZW51IGFmdGVyIG5hdmlnYXRpb25cbiAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG5cbiAgICBzY3JvbGxUbyA9IChlbCkgLT5cbiAgICAgIGlmICFlbFxuICAgICAgICByZXR1cm5cbiAgICAgIHBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiBwb3MudG9wXG4gICAgICAgIGlmIHBvcy50b3AgLSA2MCA8ICR3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy50b3AgLSA2MFxuICAgICAgICBlbHNlIGlmIHBvcy5ib3R0b20gPiAkd2luZG93LnBhZ2VZT2Zmc2V0ICsgKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy5ib3R0b20gLSAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIDE1XG4gICAgICByZXR1cm5cblxuICAgICRzY29wZS5zZWFyY2ggPSAocXVlcnksIGxpbWl0KSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5pZHMubG9hZGluZ1xuICAgICAgJHNjb3BlLmlkcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2ggPSB7fVxuICAgICAgc2VhcmNoS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciA1MFxuICAgICAgY3Vyc29yID0gZmFsc2VcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgIHEgPSBudWxsXG4gICAgICBpZiBzZWFyY2hLZXkubGVuZ3RoXG4gICAgICAgIHEgPSAkc2NvcGUuaWRlbnRpdGllc0J5U2VhcmNoS2V5LnNlYXJjaFRleHQoc2VhcmNoS2V5LCBsaW1pdCwgY3Vyc29yKVxuICAgICAgZWxzZVxuICAgICAgICBxID0gJHNjb3BlLmlkZW50aXRpZXNCeURpc3RhbmNlLnNlYXJjaFRleHQoc2VhcmNoS2V5LCBsaW1pdCwgY3Vyc29yKVxuICAgICAgcSA9IHEudGhlbiAoaWRlbnRpdGllcykgLT5cbiAgICAgICAgaWYgISRzY29wZS5pZHMubGlzdFxuICAgICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgIHF1ZXJpZXMgPSBbXVxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggaWRlbnRpdGllcywgKHJvdykgLT5cbiAgICAgICAgICByZXR1cm4gdW5sZXNzIHJvdy52YWx1ZSBhbmQgcm93LnZhbHVlLmxlbmd0aCBhbmQgISRzY29wZS5pZGVudGl0aWVzQnlIYXNoW3Jvdy52YWx1ZV1cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaFtyb3cudmFsdWVdID0gdHJ1ZVxuICAgICAgICAgIHNlYXJjaEtleSA9IHJvdy5rZXlcbiAgICAgICAgICAjIHAgPSAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHJvdy52YWx1ZSlcbiAgICAgICAgICBwID0gJHNjb3BlLmlwZnNHZXQocm93LnZhbHVlKVxuICAgICAgICAgIC50aGVuIChyb3cpIC0+XG4gICAgICAgICAgICBpZGVudGl0eSA9IHsgc2VhcmNoS2V5OiBzZWFyY2hLZXkgfVxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaCBKU09OLnBhcnNlKHJvdykuYXR0cnMsIChhdHRyKSAtPlxuICAgICAgICAgICAgICBkaXN0ID0gcGFyc2VJbnQoYXR0ci5kaXN0KVxuICAgICAgICAgICAgICBpZiAhaXNOYU4oZGlzdCkgYW5kIChpZGVudGl0eS5kaXN0YW5jZSA9PSB1bmRlZmluZWQgb3IgKDAgPD0gZGlzdCA8IGlkZW50aXR5LmRpc3RhbmNlKSlcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5kaXN0YW5jZSA9IGRpc3RcbiAgICAgICAgICAgICAgaWYgaWRlbnRpdHkucG9zID09IHVuZGVmaW5lZCBhbmQgcGFyc2VJbnQoYXR0ci5wb3MpID4gMFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LnBvcyA9IGF0dHIucG9zXG4gICAgICAgICAgICAgIGlmIGlkZW50aXR5Lm5lZyA9PSB1bmRlZmluZWQgYW5kIHBhcnNlSW50KGF0dHIubmVnKSA+IDBcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5uZWcgPSBhdHRyLm5lZ1xuICAgICAgICAgICAgICBzd2l0Y2ggYXR0ci5uYW1lXG4gICAgICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5lbWFpbCA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgICAgICBpZGVudGl0eS5uYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5pY2tuYW1lID0gYXR0ci52YWxcbiAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lm5hbWUgPSBhdHRyLnZhbCBpZiAhaWRlbnRpdHkubmFtZVxuICAgICAgICAgICAgICAgIHdoZW4gJ2JpdGNvaW4nLCAnYml0Y29pbl9hZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgaWRlbnRpdHkuYml0Y29pbiA9IGF0dHIudmFsXG4gICAgICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICAgICAgaWYgYXR0ci52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS50d2l0dGVyID0gYXR0ci52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgICBpZiBhdHRyLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgICAgICBpZGVudGl0eS5mYWNlYm9vayA9IGF0dHIudmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICAgIGlmIGF0dHIudmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgICAgIGlkZW50aXR5Lmdvb2dsZVBsdXMgPSBhdHRyLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoYXR0ci5uYW1lKVxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkubGlua1RvXG4gICAgICAgICAgICAgICAgaWRlbnRpdHkubGlua1RvID0geyB0eXBlOiBhdHRyLm5hbWUsIHZhbHVlOiBhdHRyLnZhbCB9XG4gICAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICAgIGlkZW50aXR5LmxpbmtUbyA9IHsgdHlwZTogYXR0ci5uYW1lLCB2YWx1ZTogYXR0ci52YWwgfVxuICAgICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBpZiAhaWRlbnRpdHkuZ3JhdmF0YXJcbiAgICAgICAgICAgICAgICBpZGVudGl0eS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShhdHRyLnZhbCkudG9TdHJpbmcoKVxuICAgICAgICAgICAgaWYgIWlkZW50aXR5Lm5hbWVcbiAgICAgICAgICAgICAgaWRlbnRpdHkubmFtZSA9IHJvdy5kYXRhLmF0dHJzWzBdLnZhbFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0LnB1c2goaWRlbnRpdHkpXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIHF1ZXJpZXMucHVzaCBwXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoID4gMFxuICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5ID0gMFxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA8IGxpbWl0XG4gICAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgcmV0dXJuICRxLmFsbChxdWVyaWVzKVxuICAgICAgcmV0dXJuIHEudGhlbiAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuXG4gICAgJHNjb3BlLnNlYXJjaEtleWRvd24gPSAoZXZlbnQpIC0+XG4gICAgICBzd2l0Y2ggKGlmIGV2ZW50IHRoZW4gZXZlbnQud2hpY2ggZWxzZSAtMSlcbiAgICAgICAgd2hlbiAzOFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+IDBcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSAtIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5LS1cbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDQwXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5IDwgKCRzY29wZS5pZHMubGlzdC5sZW5ndGggfHwgMCkgLSAxXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXkgKyAxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSsrXG4gICAgICAgICAgc2Nyb2xsVG8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSlcbiAgICAgICAgd2hlbiAxM1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZCA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV1cbiAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQubGlua1RvLnR5cGUsIHZhbHVlOiBpZC5saW5rVG8udmFsdWUgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8udHlwZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbHVlIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5dXG4iXX0=

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
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', 'localStorageService', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs;
        msgs = localStorageService.get('localMessages') || {};
        return $scope.msgs = {
          loading: false,
          finished: false,
          list: Object.values(msgs)
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
            return $scope.ipfsGet(hash).then(function(res) {
              return $scope.$apply(function() {
                return $scope.message = {
                  'jws': res
                };
              });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUUsRUFFakUsWUFGaUUsRUFHakUsU0FIaUUsRUFJakUsY0FKaUUsRUFLakUsV0FMaUUsRUFNakUsT0FOaUUsRUFRakUsVUFSaUUsRUFTakUsUUFUaUUsRUFVakUsVUFWaUUsRUFXakUscUJBWGlFLEVBWWpFLFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsT0FBckIsRUFBOEIsWUFBOUIsRUFBNEMsU0FBNUMsRUFBdUQsS0FBdkQsRUFBOEQsUUFBOUQsRUFBd0UsTUFBeEUsRUFBZ0YsUUFBaEYsRUFBMEYsbUJBQTFGO01BQ0UsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsWUFBWSxDQUFDO01BQzdCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFlBQVksQ0FBQztNQUU5QixNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0I7TUFFdEIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBQTtBQUNqQixZQUFBO1FBQUEsSUFBQSxHQUFPLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7ZUFDbkQsTUFBTSxDQUFDLElBQVAsR0FDRTtVQUFBLE9BQUEsRUFBUyxLQUFUO1VBQ0EsUUFBQSxFQUFVLEtBRFY7VUFFQSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQVAsQ0FBYyxJQUFkLENBRk47O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNiLElBQUEsS0FBQSxDQUFNLElBQUksQ0FBQyxHQUFMLENBQVMsQ0FBVCxFQUFZLElBQUksQ0FBQyxHQUFMLENBQVMsTUFBVCxDQUFaLENBQU47TUFEYTtNQUduQixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFDLE1BQUQ7QUFDakIsWUFBQTtRQUFBLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBQSxHQUFTLENBQVo7VUFDRSxTQUFBLEdBQVksV0FEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSxXQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtBQUNqQixZQUFBO1FBQUEsU0FBQSxHQUFZO1FBQ1osSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNFLFNBQUEsR0FBWSxzQkFEZDtTQUFBLE1BRUssSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNILFNBQUEsR0FBWSx3QkFEVDs7ZUFFTDtNQU5pQjtNQVFuQixNQUFNLENBQUMsZUFBUCxHQUF5QixPQUFPLENBQUMsVUFBUixHQUFxQjtNQUU5QyxNQUFNLENBQUMsSUFBUCxHQUFjLFNBQUE7QUFDWixZQUFBO1FBQUEsSUFBVSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQXRCO0FBQUEsaUJBQUE7O1FBQ0EsTUFBTSxDQUFDLElBQVAsR0FBYyxNQUFNLENBQUMsSUFBUCxJQUFlO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtRQUV0QixTQUFBLEdBQVk7UUFDWixJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQXBCO1VBQ0UsU0FBQSxHQUFZLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQWpCLEdBQTBCLENBQTFCLENBQTRCLENBQUMsVUFENUQ7O1FBRUEsQ0FBQSxHQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBcEIsQ0FBK0IsRUFBL0IsRUFBbUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFsRCxFQUF5RCxTQUF6RCxFQUFvRSxJQUFwRSxDQUNKLENBQUMsSUFERyxDQUNFLFNBQUMsR0FBRDtBQUNKLGNBQUE7VUFBQSxRQUFBLEdBQVc7VUFDWCxhQUFBLEdBQWdCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7QUFDNUQsZUFBQSxxQ0FBQTs7WUFDRSxJQUFHLElBQUksQ0FBQyxLQUFSO2NBQ0UsQ0FBQSxHQUFJLElBQUksQ0FBQztjQUNULENBQUMsQ0FBQyxTQUFGLEdBQWMsSUFBSSxDQUFDO2NBQ25CLElBQUcsYUFBYSxDQUFDLGNBQWQsQ0FBNkIsQ0FBQyxDQUFDLElBQS9CLENBQUg7Z0JBQ0UsT0FBTyxhQUFjLENBQUEsQ0FBQyxDQUFDLElBQUY7Z0JBQ3JCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLEVBQXlDLGFBQXpDLEVBRkY7ZUFBQSxNQUFBO2dCQUlFLFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBZCxFQUpGO2VBSEY7O0FBREY7QUFTQSxpQkFBTztRQVpILENBREY7ZUFjSixDQUFDLENBQUMsSUFBRixDQUFPLFNBQUMsUUFBRDtVQUNMLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFFBQXZCO1VBQ0EsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBckIsQ0FBMkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUF2QyxFQUE2QyxRQUE3QztVQUNBLElBQUcsUUFBUSxDQUFDLE1BQVQsR0FBa0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEdBQXVCLENBQTVDO1lBQ0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFBO3FCQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBWixHQUF1QjtZQUExQixDQUFkLEVBREY7O2lCQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTttQkFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVosR0FBc0I7VUFBekIsQ0FBZDtRQUxLLENBQVA7TUF0Qlk7TUE2QmQsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBQyxPQUFEO1FBQ2xCLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBTSxDQUFDLE9BQXRCLEVBQStCLE9BQS9CO1FBQ0EsTUFBTSxDQUFDLFNBQVAsQ0FBQTtlQUNBLFFBQUEsQ0FBUyxTQUFBO2lCQUFHLFVBQVUsQ0FBQyxVQUFYLENBQXNCLGdCQUF0QjtRQUFILENBQVQ7TUFIa0I7TUFNcEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsU0FBQTtBQUNmLFlBQUE7UUFBQSxJQUFHLFlBQVksQ0FBQyxFQUFoQjtVQUNFLGVBQUEsR0FBa0IsU0FBQTtZQUNoQixNQUFNLENBQUMsZUFBUCxDQUF1QixDQUFDLE1BQU0sQ0FBQyxPQUFSLENBQXZCLEVBQXlDLEVBQXpDLEVBQTZDLElBQTdDO1lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsVUFBQSxHQUFhLElBQWpDO1lBQ0EsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsTUFBTSxDQUFDLE9BQTVCO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLEdBQWdDLFFBQVEsQ0FBQyxHQUFULENBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFmLElBQThCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQXpFLENBQTRFLENBQUMsUUFBN0UsQ0FBQTtZQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFmLEdBQW1DLFFBQVEsQ0FBQyxHQUFULENBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFmLElBQWlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQS9FLENBQWtGLENBQUMsUUFBbkYsQ0FBQTtZQUNuQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0I7bUJBQ3RCLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxFQUEwQixTQUFDLE9BQUQ7Y0FDeEIsSUFBRyxPQUFIO3VCQUNFLE1BQU0sQ0FBQyxrQkFBUCxDQUEwQjtrQkFBRSxJQUFBLEVBQU0sT0FBUjtrQkFBaUIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBdkM7aUJBQTFCLEVBQWlGLFNBQUMsT0FBRDt5QkFDL0UsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFBOzJCQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBZixHQUE0QjtrQkFBL0IsQ0FBZDtnQkFEK0UsQ0FBakYsRUFERjs7WUFEd0IsQ0FBMUI7VUFQZ0I7VUFZbEIsaUJBQUEsR0FBb0IsU0FBQTttQkFDbEIsTUFBTSxDQUFDLE9BQVAsR0FBaUIsUUFBUSxDQUFDLEdBQVQsQ0FDZjtjQUFBLEVBQUEsRUFBSSxJQUFKO2NBQ0EsY0FBQSxFQUFnQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBRC9CO2NBRUEsZUFBQSxFQUFpQixNQUFNLENBQUMsT0FBTyxDQUFDLGVBRmhDO2NBR0EsWUFBQSxFQUFjLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFIN0I7YUFEZSxFQUtmLGVBTGU7VUFEQztVQVFwQixJQUFBLEdBQU8sWUFBWSxDQUFDO1VBQ3BCLEtBQUEsR0FBUTtVQUNSLElBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyx3QkFBWCxDQUFIO21CQUVFLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFvQixDQUFDLElBQXJCLENBQTBCLFNBQUMsR0FBRDtxQkFDeEIsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFBO3VCQUFHLE1BQU0sQ0FBQyxPQUFQLEdBQWlCO2tCQUFFLEtBQUEsRUFBTyxHQUFUOztjQUFwQixDQUFkO1lBRHdCLENBQTFCLENBRUEsQ0FBQyxJQUZELENBRU0sZUFGTixDQUdBLEVBQUMsS0FBRCxFQUhBLENBR08sU0FBQTtxQkFDTCxpQkFBQSxDQUFBO1lBREssQ0FIUCxFQUZGO1dBQUEsTUFBQTttQkFRRSxpQkFBQSxDQUFBLEVBUkY7V0F2QkY7O01BRGU7SUF0RW5CLENBWmlFO0dBQW5FO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgTWVzc2FnZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnTWVzc2FnZXMnXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgTWVzc2FnZXMsIGNvbmZpZywgJHRpbWVvdXQsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcblxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSAncmF0aW5nJ1xuXG4gICAgJHNjb3BlLnJlc2V0TXNncyA9IC0+XG4gICAgICBtc2dzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgICAgJHNjb3BlLm1zZ3MgPVxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICBmaW5pc2hlZDogZmFsc2VcbiAgICAgICAgbGlzdDogT2JqZWN0LnZhbHVlcyhtc2dzKVxuICAgICRzY29wZS5yZXNldE1zZ3MoKVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLmZpbmQgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5tc2dzLmxvYWRpbmdcbiAgICAgICRzY29wZS5tc2dzID0gJHNjb3BlLm1zZ3MgfHwgW11cbiAgICAgICRzY29wZS5tc2dzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAjIEdldCBsYXRlc3QgbWVzc2FnZXMgZnJvbSBpcGZzIGluZGV4XG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLm1zZ3MubGlzdFskc2NvcGUubXNncy5saXN0Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgcCA9ICRzY29wZS5tZXNzYWdlSW5kZXguc2VhcmNoVGV4dCgnJywgJHNjb3BlLmZpbHRlcnMubGltaXQsIHNlYXJjaEtleSwgdHJ1ZSlcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIG1lc3NhZ2VzID0gW11cbiAgICAgICAgbG9jYWxNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgICAgZm9yIHBhaXIgaW4gcmVzXG4gICAgICAgICAgaWYgcGFpci52YWx1ZVxuICAgICAgICAgICAgdiA9IHBhaXIudmFsdWVcbiAgICAgICAgICAgIHYuc2VhcmNoS2V5ID0gcGFpci5rZXlcbiAgICAgICAgICAgIGlmIGxvY2FsTWVzc2FnZXMuaGFzT3duUHJvcGVydHkodi5oYXNoKVxuICAgICAgICAgICAgICBkZWxldGUgbG9jYWxNZXNzYWdlc1t2Lmhhc2hdXG4gICAgICAgICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgbG9jYWxNZXNzYWdlcylcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbWVzc2FnZXMucHVzaCh2KVxuICAgICAgICByZXR1cm4gbWVzc2FnZXNcbiAgICAgIHAudGhlbiAobWVzc2FnZXMpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgbWVzc2FnZXNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLm1zZ3MubGlzdCwgbWVzc2FnZXMpXG4gICAgICAgIGlmIG1lc3NhZ2VzLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMSAjIGJ1Z1xuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1zZ3MuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1zZ3MubG9hZGluZyA9IGZhbHNlXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5yZXNldE1zZ3MoKVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgICMgRmluZCBleGlzdGluZyBNZXNzYWdlXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgaWYgJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSwgdHJ1ZSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuYXV0aG9yR3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoJHNjb3BlLm1lc3NhZ2UuYXV0aG9yRW1haWwgb3IgJHNjb3BlLm1lc3NhZ2UuZGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRHcmF2YXRhciA9IENyeXB0b0pTLk1ENSgkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRFbWFpbCBvciAkc2NvcGUubWVzc2FnZS5kYXRhLnJlY2lwaWVudFswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLmhhc2ggPSBoYXNoXG4gICAgICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAgICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSB7IHR5cGU6ICdrZXlJRCcsIHZhbHVlOiAkc2NvcGUubWVzc2FnZS5zaWduZXJfa2V5aWQgfSwgKHByb2ZpbGUpIC0+XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuXG4gICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpID0gLT5cbiAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgaWQ6IGhhc2hcbiAgICAgICAgICAgIHZpZXdwb2ludF9uYW1lOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfbmFtZVxuICAgICAgICAgICAgdmlld3BvaW50X3ZhbHVlOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfdmFsdWVcbiAgICAgICAgICAgIG1heF9kaXN0YW5jZTogJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgLCBwcm9jZXNzUmVzcG9uc2VcblxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHF1ZXJ5ID0gbnVsbFxuICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgIyAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIGhhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAkc2NvcGUuaXBmc0dldChoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlID0geyAnandzJzogcmVzIH0gIyBzYW1lIGZvcm1hdCBhcyB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IE1lc3NhZ2VzLmdldFxuICAgICAgICAgIC50aGVuIHByb2Nlc3NSZXNwb25zZVxuICAgICAgICAgIC5jYXRjaCAtPiAjIGZhbGxiYWNrIGdvIGxvY2FsIGlmIGlwZnMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZ2V0TWVzc2FnZUZyb21BcGkoKVxuXG4gICAgcmV0dXJuXG5dXG4iXX0=

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
          $scope.localMessages[args.message.hash] = args.message;
          $scope.localMessages[args.message.hash].local = true;
          localStorageService.set('localMessages', $scope.localMessages);
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
      addLocalMessages = function() {
        var i, len, msg, msgs, ref, results;
        msgs = localStorageService.get('localMessages') || {};
        ref = Object.values(msgs);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          msg = ref[i];
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
              addLocalMessages();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFDZixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFDckIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFqQzs7TUFDQSxNQUFNLENBQUMsWUFBUCxHQUNFO1FBQUEsSUFBQSxFQUFNLEVBQU47UUFDQSxLQUFBLEVBQU8sWUFBWSxDQUFDLEtBRHBCOztNQUVGLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUN0QixNQUFNLENBQUMsYUFBUCxHQUF1QjtNQUN2QixNQUFNLENBQUMsZUFBUCxHQUF5QixPQUFPLENBQUMsVUFBUixHQUFxQjtNQUM5QyxNQUFNLENBQUMsTUFBUCxHQUNFO1FBQUEsS0FBQSxFQUFPLENBQVA7UUFDQSxPQUFBLEVBQ0U7VUFBQSxLQUFBLEVBQU8sQ0FBQyxDQUFSO1VBQ0EsSUFBQSxFQUFNLENBRE47VUFFQSxpQkFBQSxFQUFtQixJQUZuQjtVQUdBLGVBQUEsRUFBaUIsSUFIakI7U0FGRjs7TUFPRixhQUFBLEdBQWdCO01BQ2hCLE1BQU0sQ0FBQyxHQUFQLENBQVcsY0FBWCxFQUEyQixTQUFDLEtBQUQsRUFBUSxJQUFSO1FBQ3pCLElBQUEsQ0FBYyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQWQ7QUFBQSxpQkFBQTs7UUFDQSxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQXhCLEtBQWdDLGlCQUFoQyxJQUFzRCxDQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBckU7VUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVIsR0FBb0I7VUFDcEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFSLElBQXlCO1VBQ3pCLElBQUcsTUFBTSxDQUFDLFdBQVAsSUFBc0IsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFuQixDQUEyQixJQUFJLENBQUMsRUFBaEMsQ0FBQSxLQUF1QyxDQUFDLENBQWpFO21CQUNFLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBbkIsQ0FBd0IsSUFBSSxDQUFDLEVBQTdCLEVBREY7V0FIRjtTQUFBLE1BS0ssSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUF4QixLQUFnQyxtQkFBaEMsSUFBd0QsQ0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQXZFO1VBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFSLEdBQWtCO1VBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBUixJQUF1QjtVQUN2QixJQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBbkIsQ0FBMkIsSUFBSSxDQUFDLEVBQWhDLENBQUEsS0FBdUMsQ0FBQyxDQUEzQzttQkFDRSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQW5CLENBQXdCLElBQUksQ0FBQyxFQUE3QixFQURGO1dBSEc7U0FBQSxNQUtBLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBeEIsS0FBZ0MsUUFBbkM7VUFDSCxJQUFHLGFBQUg7WUFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQWhCLENBQUEsRUFERjs7VUFFQSxNQUFNLENBQUMsZUFBUCxDQUF1QixDQUFDLElBQUksQ0FBQyxPQUFOLENBQXZCO1VBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsT0FBN0I7VUFDQSxNQUFNLENBQUMsYUFBYyxDQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBYixDQUFyQixHQUEwQyxJQUFJLENBQUM7VUFDL0MsTUFBTSxDQUFDLGFBQWMsQ0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQWIsQ0FBa0IsQ0FBQyxLQUF4QyxHQUFnRDtVQUNoRCxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxNQUFNLENBQUMsYUFBaEQ7aUJBQ0EsYUFBQSxHQUFnQixLQVJiOztNQVpvQixDQUEzQjtNQXNCQSxNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ2hCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLEtBQUssQ0FBQyxJQUFUO1VBQ0UsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFDLE1BQUQsRUFBUyxLQUFLLENBQUMsSUFBZixDQUFmLEVBREY7O1FBRUEsSUFBRyxLQUFLLENBQUMsS0FBVDtVQUNFLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBQyxPQUFELEVBQVUsS0FBSyxDQUFDLEtBQWhCLENBQWYsRUFERjs7UUFFQSxJQUFHLEtBQUssQ0FBQyxHQUFUO1VBQ0UsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFDLEtBQUQsRUFBUSxLQUFLLENBQUMsR0FBZCxDQUFmLEVBREY7O1FBRUEsSUFBRyxLQUFLLENBQUMsS0FBVDtVQUNFLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBQyxPQUFELEVBQVUsS0FBSyxDQUFDLEtBQWhCLENBQWYsRUFERjs7UUFFQSxNQUFBLEdBQ0U7VUFBQSxJQUFBLEVBQU0saUJBQU47VUFDQSxTQUFBLEVBQVcsU0FEWDs7ZUFFRixNQUFNLENBQUMsTUFBUCxDQUFjLEtBQWQsRUFBcUIsTUFBckIsQ0FBNEIsQ0FBQyxJQUE3QixDQUFrQyxTQUFDLE9BQUQ7aUJBQ2hDLE1BQU0sQ0FBQyxFQUFQLENBQVUsZUFBVixFQUEyQjtZQUFFLEVBQUEsRUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQW5CO1dBQTNCO1FBRGdDLENBQWxDLEVBRUUsU0FBQyxLQUFEO2lCQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFQUFxQixLQUFyQjtRQURBLENBRkY7TUFiZ0I7TUFrQmxCLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLFNBQUE7QUFDdEIsWUFBQTtRQUFBLFdBQUEsR0FBYyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQXZCLElBQWdDO1FBQzlDLElBQUcsV0FBVyxDQUFDLE1BQVosR0FBcUIsQ0FBeEI7VUFDRSxDQUFBLEdBQUksV0FBWSxDQUFBLENBQUE7VUFDaEIsaUJBQUEsR0FBb0IsQ0FBQyxDQUFDO1VBQ3RCLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtZQUNaLE1BQU0sQ0FBQyxLQUFQLEdBQ0U7Y0FBQSxpQkFBQSxFQUFtQixDQUFDLENBQUMsR0FBckI7Y0FDQSxpQkFBQSxFQUFtQixDQUFDLENBQUMsR0FEckI7Y0FFQSxnQkFBQSxFQUFrQixDQUFDLENBQUMsSUFGcEI7O21CQUdGLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLENBQUMsQ0FBQztVQUxSLENBQWQsRUFIRjtTQUFBLE1BQUE7VUFVRSxpQkFBQSxHQUFvQixFQVZ0Qjs7QUFXQSxhQUFBLGtCQUFBO1VBQ0UsSUFBQSxHQUFPLFdBQVksQ0FBQSxHQUFBO0FBQ25CLGtCQUFPLElBQUksQ0FBQyxJQUFaO0FBQUEsaUJBQ08sT0FEUDtjQUVJLElBQUksQ0FBQyxTQUFMLEdBQWlCO2NBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2NBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksU0FBQSxHQUFZLElBQUksQ0FBQztjQUM3QixJQUFJLENBQUMsWUFBTCxHQUFvQjtjQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVosR0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFaLElBQXFCLElBQUksQ0FBQztBQUwzQztBQURQLGlCQU9PLGlCQVBQO0FBQUEsaUJBTzBCLFNBUDFCO2NBUUksSUFBSSxDQUFDLFNBQUwsR0FBaUI7Y0FDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Y0FDaEIsSUFBSSxDQUFDLElBQUwsR0FBWSxrQ0FBQSxHQUFxQyxJQUFJLENBQUM7Y0FDdEQsSUFBSSxDQUFDLFlBQUwsR0FBb0I7QUFKRTtBQVAxQixpQkFZTyxpQkFaUDtBQUFBLGlCQVkwQixXQVoxQjtjQWFJLElBQUksQ0FBQyxTQUFMLEdBQWlCO2NBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2NBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksaURBQUEsR0FBb0QsSUFBSSxDQUFDO0FBSC9DO0FBWjFCLGlCQWdCTyxTQWhCUDtjQWlCSSxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQURkO0FBaEJQLGlCQWtCTyxVQWxCUDtjQW1CSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVosR0FBdUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFaLElBQXdCLElBQUksQ0FBQztjQUNwRCxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQUZkO0FBbEJQLGlCQXFCTyxNQXJCUDtjQXNCSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosR0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLElBQW9CLElBQUksQ0FBQztjQUM1QyxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQUZkO0FBckJQLGlCQXdCTyxLQXhCUDtBQUFBLGlCQXdCYyxPQXhCZDtjQXlCSSxJQUFJLENBQUMsU0FBTCxHQUFpQjtjQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQjtjQUNoQixJQUFJLENBQUMsSUFBTCxHQUFZLE1BQUEsR0FBUyxJQUFJLENBQUM7Y0FDMUIsSUFBSSxDQUFDLFlBQUwsR0FBb0I7QUFKVjtBQXhCZCxpQkE2Qk8sWUE3QlA7Y0E4QkksSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSw4QkFBZixDQUFIO2dCQUNFLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUFQLElBQXFCO2tCQUFFLGtCQUFBLEVBQW9CLE1BQUEsR0FBUyxJQUFJLENBQUMsR0FBZCxHQUFvQixHQUExQztrQkFEM0M7O0FBREc7QUE3QlAsaUJBZ0NPLGNBaENQO2NBaUNJLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsOEJBQWYsQ0FBSDtnQkFDRSxNQUFNLENBQUMsWUFBUCxHQUFzQixNQUFNLENBQUMsWUFBUCxJQUF1QixJQUFJLENBQUMsSUFEcEQ7O0FBREc7QUFoQ1AsaUJBbUNPLEtBbkNQO2NBb0NJLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO2NBQ2pCLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGVBQWpCLENBQUEsR0FBb0MsQ0FBQyxDQUF4QztnQkFDRSxJQUFJLENBQUMsU0FBTCxHQUFpQjtnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSxlQUFmLENBQWdDLENBQUEsQ0FBQTtnQkFDaEQsSUFBSSxDQUFDLFlBQUwsR0FBb0IsS0FMdEI7ZUFBQSxNQU1LLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGNBQWpCLENBQUEsR0FBbUMsQ0FBQyxDQUF2QztnQkFDSCxJQUFJLENBQUMsU0FBTCxHQUFpQjtnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSxjQUFmLENBQStCLENBQUEsQ0FBQTtnQkFDL0MsSUFBSSxDQUFDLFlBQUwsR0FBb0IsS0FMakI7ZUFBQSxNQU1BLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGtCQUFqQixDQUFBLEdBQXVDLENBQUMsQ0FBM0M7Z0JBQ0gsSUFBSSxDQUFDLFNBQUwsR0FBaUI7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2dCQUNoQixJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsa0JBQWYsQ0FBbUMsQ0FBQSxDQUFBO2dCQUNuRCxJQUFJLENBQUMsWUFBTCxHQUFvQixLQUxqQjtlQUFBLE1BTUEsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVQsQ0FBaUIsZUFBakIsQ0FBQSxHQUFvQyxDQUFDLENBQXhDO2dCQUNILElBQUksQ0FBQyxTQUFMLEdBQWlCO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQjtnQkFDaEIsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBVCxDQUFlLGVBQWYsQ0FBZ0MsQ0FBQSxDQUFBO2dCQUNoRCxJQUFJLENBQUMsWUFBTCxHQUFvQixLQUxqQjtlQUFBLE1BTUEsSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQVQsQ0FBaUIsYUFBakIsQ0FBQSxHQUFrQyxDQUFDLENBQXRDO2dCQUNILElBQUksQ0FBQyxTQUFMLEdBQWlCO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQjtnQkFDaEIsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBVCxDQUFlLGFBQWYsQ0FBOEIsQ0FBQSxDQUFBO2dCQUM5QyxJQUFJLENBQUMsWUFBTCxHQUFvQixLQUxqQjtlQUFBLE1BQUE7Z0JBT0gsSUFBSSxDQUFDLFNBQUwsR0FBaUI7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCLGNBUmI7O0FBN0RUO1VBc0VBLElBQUcsSUFBSSxDQUFDLEdBQUwsSUFBYSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSw4QkFBZixDQUFoQjtZQUNFLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBTCxHQUFpQjtZQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixjQUpsQjs7VUFLQSxJQUFHLElBQUksQ0FBQyxhQUFMLEdBQXFCLElBQUksQ0FBQyxXQUExQixHQUF3QyxDQUEzQztZQUNFLFVBQUEsR0FBYSxJQUFJLENBQUMsYUFBTCxHQUFxQixHQUFyQixHQUEyQixDQUFDLElBQUksQ0FBQyxhQUFMLEdBQXFCLElBQUksQ0FBQyxXQUEzQjtZQUN4QyxJQUFHLFVBQUEsSUFBYyxFQUFqQjtjQUNFLEtBQUEsR0FBUSxJQUFJLENBQUMsYUFBTCxHQUFxQixpQkFBckIsR0FBeUMsR0FBekMsR0FBK0MsSUFEekQ7YUFBQSxNQUdLLElBQUcsVUFBQSxJQUFjLEVBQWpCO2NBQ0gsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsVUFEYjthQUFBLE1BQUE7Y0FHSCxJQUFJLENBQUMsUUFBTCxHQUFnQixTQUhiO2FBTFA7O1VBU0EsTUFBTSxDQUFDLGdCQUFQLEdBQTBCLE1BQU0sQ0FBQyxnQkFBUCxJQUEyQixJQUFJLENBQUM7QUF0RjVEO2VBdUZBLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtVQUNaLE1BQU0sQ0FBQyxXQUFQLEdBQXFCO1VBQ3JCLE1BQU0sQ0FBQyxxQkFBUCxDQUFBO2lCQUNBLE1BQU0sQ0FBQyxZQUFQLENBQXFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBWixJQUFvQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQWhDLElBQTRDLE1BQU0sQ0FBQyxPQUF4RTtRQUhZLENBQWQ7TUFwR3NCO01BeUd4QixNQUFNLENBQUMsaUJBQVAsR0FBMkIsU0FBQyxHQUFELEVBQU0sR0FBTjtBQUN6QixZQUFBO1FBQUEsZ0JBQUEsR0FBbUIsRUFBQSxDQUFHLFNBQUMsT0FBRDtVQUNwQixJQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUF6QjttQkFDRSxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQXJCLENBQWdDLEVBQWhDLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLEVBQWtELElBQWxELENBQXVELENBQUMsSUFBeEQsQ0FBNkQsU0FBQyxHQUFEO2NBQzNELEdBQUcsQ0FBQyxPQUFKLENBQVksU0FBQyxHQUFEO0FBQ1Ysb0JBQUE7Z0JBQUEsR0FBQSxHQUFNLEdBQUcsQ0FBQztnQkFDVixJQUFBLENBQU8sR0FBRyxDQUFDLFVBQVg7a0JBQ0UsR0FBRyxDQUFDLFVBQUosR0FBaUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBYixDQUFtQixHQUFHLENBQUMsR0FBdkIsQ0FBMkIsQ0FBQyxXQUQvQzs7Z0JBRUEsSUFBRyxRQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBZixLQUF3QixpQkFBeEIsSUFBQSxHQUFBLEtBQTJDLG1CQUE1QyxDQUFIO2tCQUNFLEdBQUcsQ0FBQyxRQUFKLEdBQWUsUUFBUSxDQUFDLEdBQVQsQ0FBYSxHQUFHLENBQUMsV0FBSixJQUFtQixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU8sQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQXpELENBQTRELENBQUMsUUFBN0QsQ0FBQTtrQkFDZixHQUFHLENBQUMsWUFBSixHQUFtQixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU8sQ0FBQSxDQUFBO3lCQUN6QyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQXJCLENBQTBCLEdBQTFCLEVBSEY7O2NBSlUsQ0FBWjtxQkFRQSxPQUFBLENBQUE7WUFUMkQsQ0FBN0QsRUFERjtXQUFBLE1BQUE7bUJBWUUsT0FBQSxDQUFBLEVBWkY7O1FBRG9CLENBQUg7ZUFjbkIsZ0JBQWdCLENBQUMsSUFBakIsQ0FBc0IsU0FBQTtBQUNwQixjQUFBO1VBQUEsSUFBQSxHQUFPO1VBQ1AsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFyQixDQUE2QixTQUFDLEdBQUQ7QUFDM0IsZ0JBQUE7WUFBQSxNQUFBLEdBQVMsTUFBQSxHQUFTO0FBQ2xCO0FBQUEsaUJBQUEscUNBQUE7O2NBQ0UsSUFBd0IsRUFBRyxDQUFBLENBQUEsQ0FBSCxLQUFTLEdBQUcsQ0FBQyxJQUFiLElBQXNCLEVBQUcsQ0FBQSxDQUFBLENBQUgsS0FBUyxHQUFHLENBQUMsR0FBM0Q7QUFBQSx1QkFBTyxJQUFJLENBQUMsSUFBTCxDQUFVLEdBQVYsRUFBUDs7QUFERjtVQUYyQixDQUE3QjtBQUlBLGlCQUFPO1FBTmEsQ0FBdEI7TUFmeUI7TUF1QjNCLE1BQU0sQ0FBQyxpQkFBUCxHQUEyQixTQUFDLEtBQUQsRUFBUSxFQUFSO1FBQ3pCLElBQUcsRUFBRSxDQUFDLGVBQU47aUJBQ0UsRUFBRSxDQUFDLFFBQUgsR0FBYyxDQUFDLEVBQUUsQ0FBQyxTQURwQjtTQUFBLE1BQUE7aUJBR0UsTUFBTSxDQUFDLGlCQUFQLENBQXlCLENBQUMsTUFBTSxDQUFDLE1BQVIsRUFBZ0IsTUFBTSxDQUFDLE9BQXZCLENBQXpCLEVBQTBELEVBQTFELENBQTZELENBQUMsSUFBOUQsQ0FBbUUsU0FBQyxJQUFEO1lBQ2pFLEVBQUUsQ0FBQyxlQUFILEdBQXFCO21CQUNyQixFQUFFLENBQUMsUUFBSCxHQUFjLENBQUMsRUFBRSxDQUFDO1VBRitDLENBQW5FLEVBSEY7O01BRHlCO01BUTNCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLFNBQUE7QUFDbkIsWUFBQTtRQUFBLElBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUF0QjtBQUFBLGlCQUFBOztRQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtRQUN0QixTQUFBLEdBQVk7UUFDWixJQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBZjtVQUNFLFNBQUEsR0FBWSxNQUFNLENBQUMsSUFBSyxDQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBWixHQUFxQixDQUFyQixDQUF1QixDQUFDLFVBRGxEOztlQUVBLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBakIsQ0FBNEIsRUFBNUIsRUFBZ0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUEvQyxFQUFzRCxTQUF0RCxFQUFpRSxJQUFqRSxDQUFzRSxDQUFDLElBQXZFLENBQTRFLFNBQUMsR0FBRDtBQUMxRSxjQUFBO1VBQUEsSUFBQSxHQUFPO1VBQ1AsR0FBRyxDQUFDLE9BQUosQ0FBWSxTQUFDLEdBQUQ7QUFDVixnQkFBQTtZQUFBLENBQUEsR0FBSSxHQUFHLENBQUM7WUFDUixDQUFDLENBQUMsU0FBRixHQUFjLEdBQUcsQ0FBQzttQkFDbEIsSUFBSSxDQUFDLElBQUwsQ0FBVSxDQUFWO1VBSFUsQ0FBWjtBQUlBLGlCQUFPO1FBTm1FLENBQTVFLENBT0EsQ0FBQyxJQVBELENBT00sU0FBQyxJQUFEO1VBQ0osTUFBTSxDQUFDLGVBQVAsQ0FBdUIsSUFBdkIsRUFBNkI7WUFBRSxlQUFBLEVBQWlCLEtBQW5CO1dBQTdCO2lCQUNBLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtZQUNaLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQXJCLENBQTJCLE1BQU0sQ0FBQyxJQUFsQyxFQUF3QyxJQUF4QztZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtZQUN0QixJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEdBQXVCLENBQXhDO3FCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBWixHQUF1QixLQUR6Qjs7VUFIWSxDQUFkO1FBRkksQ0FQTixDQWNBLEVBQUMsS0FBRCxFQWRBLENBY08sU0FBQyxLQUFEO2lCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBWixHQUF1QjtRQURsQixDQWRQO01BTm1CO01BdUJyQixNQUFNLENBQUMsZUFBUCxHQUF5QixTQUFBO0FBQ3ZCLFlBQUE7UUFBQSxJQUFVLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBMUI7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWhCLEdBQTBCO1FBQzFCLFNBQUEsR0FBWTtRQUNaLElBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFuQjtVQUNFLFNBQUEsR0FBWSxNQUFNLENBQUMsUUFBUyxDQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBaEIsR0FBeUIsQ0FBekIsQ0FBMkIsQ0FBQyxVQUQxRDs7ZUFFQSxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQXJCLENBQWdDLEVBQWhDLEVBQW9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBbkQsRUFBMEQsU0FBMUQsRUFBcUUsSUFBckUsQ0FBMEUsQ0FBQyxJQUEzRSxDQUFnRixTQUFDLEdBQUQ7QUFDOUUsY0FBQTtVQUFBLElBQUEsR0FBTztVQUNQLEdBQUcsQ0FBQyxPQUFKLENBQVksU0FBQyxHQUFEO0FBQ1YsZ0JBQUE7WUFBQSxDQUFBLEdBQUksR0FBRyxDQUFDO1lBQ1IsQ0FBQyxDQUFDLFNBQUYsR0FBYyxHQUFHLENBQUM7bUJBQ2xCLElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBVjtVQUhVLENBQVo7QUFJQSxpQkFBTztRQU51RSxDQUFoRixDQU9BLENBQUMsSUFQRCxDQU9NLFNBQUMsUUFBRDtVQUNKLE1BQU0sQ0FBQyxlQUFQLENBQXVCLFFBQXZCLEVBQWlDO1lBQUUsZUFBQSxFQUFpQixJQUFuQjtXQUFqQztpQkFDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7QUFDWixnQkFBQTtZQUFBLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQXJCLENBQTJCLE1BQU0sQ0FBQyxRQUFsQyxFQUE0QyxRQUE1QztZQUNBLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBaEIsR0FBMEI7WUFDMUIsSUFBRyxRQUFRLENBQUMsTUFBVCxHQUFrQixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsR0FBdUIsQ0FBNUM7Y0FDRSxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWhCLEdBQTJCLEtBRDdCOztZQUVBLE1BQUEsR0FBUyxRQUFRLENBQUMsSUFBVCxDQUFjLFNBQUMsQ0FBRCxFQUFHLENBQUg7Y0FDckIsSUFBWSxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxRQUEzQjtBQUFBLHVCQUFPLEVBQVA7O2NBQ0EsSUFBYSxDQUFDLENBQUMsUUFBRixHQUFhLENBQUMsQ0FBQyxRQUE1QjtBQUFBLHVCQUFPLENBQUMsRUFBUjs7QUFDQSxxQkFBTztZQUhjLENBQWQ7bUJBSVQsTUFBTSxDQUFDLE9BQVAsQ0FBZSxTQUFDLEdBQUQ7QUFDYixrQkFBQTtjQUFBLElBQVUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFoQixJQUEwQixFQUExQixJQUFpQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWxCLElBQTRCLEVBQXZFO0FBQUEsdUJBQUE7O2NBQ0EsYUFBQSxHQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBVCxHQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQS9CLENBQUEsR0FBNEM7Y0FDNUQsSUFBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWhCLEdBQXlCLEVBQXpCLElBQWdDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBVCxHQUFrQixhQUFyRDt1QkFDRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWhCLENBQXFCLEdBQXJCLEVBREY7ZUFBQSxNQUVLLElBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFsQixHQUEyQixFQUEzQixJQUFtQyxHQUFHLENBQUMsTUFBSixHQUFhLGFBQW5EO3VCQUNILE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBbEIsQ0FBdUIsR0FBdkIsRUFERzs7WUFMUSxDQUFmO1VBVFksQ0FBZDtRQUZJLENBUE4sQ0F5QkEsRUFBQyxLQUFELEVBekJBLENBeUJPLFNBQUMsS0FBRDtpQkFDTCxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWhCLEdBQTJCO1FBRHRCLENBekJQO01BTnVCO01Ba0N6QixNQUFNLENBQUMscUJBQVAsR0FBK0IsU0FBQTtBQUM3QixZQUFBO1FBQUEsS0FBQSxHQUFRLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBWixJQUFxQixNQUFNLENBQUM7ZUFDcEMsTUFBTSxDQUFDLFFBQVAsR0FBa0IsUUFBUSxDQUFDLEdBQVQsQ0FBYSxLQUFiLENBQW1CLENBQUMsUUFBcEIsQ0FBQTtNQUZXO01BSS9CLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFNBQUMsT0FBRDtRQUNsQixPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QixFQUErQixPQUEvQjtRQUNBLE1BQU0sQ0FBQyxJQUFQLEdBQWM7UUFDZCxNQUFNLENBQUMsUUFBUCxHQUFrQjtlQUNsQixRQUFBLENBQVMsU0FBQTtpQkFBRyxVQUFVLENBQUMsVUFBWCxDQUFzQixnQkFBdEI7UUFBSCxDQUFUO01BSmtCO01BTXBCLGdCQUFBLEdBQW1CLFNBQUE7QUFDakIsWUFBQTtRQUFBLElBQUEsR0FBTyxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixDQUFBLElBQTRDO0FBQ25EO0FBQUE7YUFBQSxxQ0FBQTs7VUFDRSxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBdEIsS0FBNEIsTUFBTSxDQUFDLE1BQW5DLElBQThDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBdEIsS0FBNEIsTUFBTSxDQUFDLE9BQXBGO1lBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFoQixDQUF3QixHQUF4QixFQURGOztVQUVBLElBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFuQixLQUF5QixNQUFNLENBQUMsTUFBaEMsSUFBMkMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFPLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUFuQixLQUF5QixNQUFNLENBQUMsT0FBOUU7eUJBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFaLENBQW9CLEdBQXBCLEdBREY7V0FBQSxNQUFBO2lDQUFBOztBQUhGOztNQUZpQjtNQVFuQixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFBO1FBQ2YsTUFBTSxDQUFDLE1BQVAsR0FBZ0IsWUFBWSxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFlBQVksQ0FBQztRQUM5QixNQUFNLENBQUMsWUFBUCxHQUFzQixNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBNUIsQ0FBb0MsTUFBTSxDQUFDLE1BQTNDLENBQUEsR0FBcUQsQ0FBQztRQUM1RSxJQUFHLENBQUMsTUFBTSxDQUFDLFlBQVg7VUFDRSxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO1lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxPQUFqQjtXQUE3QjtVQUNBLE1BQU0sQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBZixHQUF3QixLQUYxQjs7UUFHQSxNQUFNLENBQUMsWUFBUCxDQUFvQixNQUFNLENBQUMsT0FBM0I7UUFDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFVBQWQsRUFBMEIsU0FBQyxPQUFEO1VBQ3hCLElBQUcsT0FBSDttQkFDRSxNQUFNLENBQUMsa0JBQVAsQ0FBMEI7Y0FBRSxJQUFBLEVBQU0sTUFBTSxDQUFDLE1BQWY7Y0FBdUIsS0FBQSxFQUFPLE1BQU0sQ0FBQyxPQUFyQzthQUExQixDQUF5RSxDQUFDLElBQTFFLENBQStFLFNBQUMsT0FBRDtjQUM3RSxNQUFNLENBQUMsZUFBUCxHQUF5QjtjQUN6QixnQkFBQSxDQUFBO2NBQ0EsTUFBTSxDQUFDLGNBQVAsQ0FBQTtjQUNBLElBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFSLElBQWlCLE9BQU8sQ0FBQyxRQUExQixDQUFKO0FBQ0Usc0JBQVUsSUFBQSxLQUFBLENBQU0sa0NBQUEsR0FBcUMsSUFBSSxDQUFDLFNBQUwsQ0FBZSxPQUFmLENBQTNDLEVBRFo7O3FCQUVBLEVBQUUsQ0FBQyxHQUFILENBQU8sQ0FDTCxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFoQyxDQUEwQyxPQUFPLENBQUMsSUFBbEQsRUFBd0QsTUFBTSxDQUFDLFdBQS9ELENBREssRUFFTCxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFoQyxDQUEwQyxPQUFPLENBQUMsUUFBbEQsRUFBNEQsTUFBTSxDQUFDLFdBQW5FLENBRkssQ0FBUDtZQU42RSxDQUEvRSxDQVVBLENBQUMsSUFWRCxDQVVNLFNBQUMsT0FBRDtjQUNKLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLE9BQVEsQ0FBQSxDQUFBO2NBQzNCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLE9BQVEsQ0FBQSxDQUFBO2NBQy9CLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQXZCO3FCQUNBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLENBQW5CO1lBSkksQ0FWTixDQWVBLEVBQUMsS0FBRCxFQWZBLENBZU8sU0FBQyxHQUFEO3FCQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVosRUFBc0MsR0FBdEM7WUFESyxDQWZQLEVBREY7O1FBRHdCLENBQTFCO1FBbUJBLElBQUcsTUFBTSxDQUFDLE1BQVAsS0FBaUIsT0FBakIsSUFBNkIsTUFBTSxDQUFDLE9BQVAsS0FBa0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFsRTtpQkFDRSxNQUFNLENBQUMsUUFBUCxHQUFrQixFQURwQjs7TUEzQmU7TUE4QmpCLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFIO2VBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQURGOztJQXJURixDQWJtRTtHQUFyRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIElkZW50aXRpZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgY29uZmlnLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAwXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuaW5mbyA9IHt9XG4gICAgJHNjb3BlLnN0YXRzID0ge31cbiAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSBbXVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUuZGlzdGFuY2UgPSBudWxsXG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAkc3RhdGVQYXJhbXMuc2VhcmNoIGlmICRzdGF0ZVBhcmFtcy5zZWFyY2hcbiAgICAkc2NvcGUubmV3QXR0cmlidXRlID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgbWVzc2FnZXNBZGRlZCA9IGZhbHNlXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgIGlmIGFyZ3MubWVzc2FnZS5zaWduZWREYXRhLnR5cGUgPT0gJ3ZlcmlmeV9pZGVudGl0eScgYW5kIG5vdCBhcmdzLmlkLmNvbmZpcm1lZFxuICAgICAgICBhcmdzLmlkLmNvbmZpcm1lZCA9IHRydWVcbiAgICAgICAgYXJncy5pZC5jb25maXJtYXRpb25zICs9IDFcbiAgICAgICAgaWYgJHNjb3BlLmNvbm5lY3Rpb25zICYmICRzY29wZS5jb25uZWN0aW9ucy5pbmRleE9mKGFyZ3MuaWQpID09IC0xXG4gICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zLnB1c2ggYXJncy5pZFxuICAgICAgZWxzZSBpZiBhcmdzLm1lc3NhZ2Uuc2lnbmVkRGF0YS50eXBlID09ICd1bnZlcmlmeV9pZGVudGl0eScgYW5kIG5vdCBhcmdzLmlkLnJlZnV0ZWRcbiAgICAgICAgYXJncy5pZC5yZWZ1dGVkID0gdHJ1ZVxuICAgICAgICBhcmdzLmlkLnJlZnV0YXRpb25zICs9IDFcbiAgICAgICAgaWYgJHNjb3BlLmNvbm5lY3Rpb25zLmluZGV4T2YoYXJncy5pZCkgPT0gLTFcbiAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnMucHVzaCBhcmdzLmlkXG4gICAgICBlbHNlIGlmIGFyZ3MubWVzc2FnZS5zaWduZWREYXRhLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgaWYgbWVzc2FnZXNBZGRlZFxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5zaGlmdCgpXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW2FyZ3MubWVzc2FnZV1cbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnVuc2hpZnQgYXJncy5tZXNzYWdlXG4gICAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXSA9IGFyZ3MubWVzc2FnZVxuICAgICAgICAkc2NvcGUubG9jYWxNZXNzYWdlc1thcmdzLm1lc3NhZ2UuaGFzaF0ubG9jYWwgPSB0cnVlXG4gICAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgJHNjb3BlLmxvY2FsTWVzc2FnZXMpXG4gICAgICAgIG1lc3NhZ2VzQWRkZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgIGlmIGVudHJ5LnVybFxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ3VybCcsIGVudHJ5LnVybF1cbiAgICAgIGlmIGVudHJ5LnBob25lXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsncGhvbmUnLCBlbnRyeS5waG9uZV1cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHN1Y2Nlc3MpIC0+XG4gICAgICAgICRzdGF0ZS5nbyAnbWVzc2FnZXMuc2hvdycsIHsgaWQ6IHN1Y2Nlc3MuZGF0YS5oYXNoIH1cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgY29ubmVjdGlvbnMgPSAkc2NvcGUuaWRlbnRpdHlQcm9maWxlLmF0dHJzIG9yIFtdXG4gICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgIGMgPSBjb25uZWN0aW9uc1swXVxuICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZmlybWF0aW9uc1xuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgJHNjb3BlLnN0YXRzID1cbiAgICAgICAgICAgIHJlY2VpdmVkX3Bvc2l0aXZlOiBjLnBvc1xuICAgICAgICAgICAgcmVjZWl2ZWRfbmVnYXRpdmU6IGMubmVnXG4gICAgICAgICAgICByZWNlaXZlZF9uZXV0cmFsOiBjLm5ldXRcbiAgICAgICAgICAkc2NvcGUuZGlzdGFuY2UgPSBjLmRpc3RcbiAgICAgIGVsc2VcbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICBmb3Iga2V5IG9mIGNvbm5lY3Rpb25zXG4gICAgICAgIGNvbm4gPSBjb25uZWN0aW9uc1trZXldXG4gICAgICAgIHN3aXRjaCBjb25uLm5hbWVcbiAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmluZm8uZW1haWwgPSAkc2NvcGUuaW5mby5lbWFpbCBvciBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgJHNjb3BlLmluZm8ubmlja25hbWUgPSAkc2NvcGUuaW5mby5uaWNrbmFtZSBvciBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5uYW1lID0gJHNjb3BlLmluZm8ubmFtZSBvciBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgIHdoZW4gJ3RlbCcsICdwaG9uZSdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ3RlbDonICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyBjb25uLnZhbCArICcpJyB9XG4gICAgICAgICAgd2hlbiAncHJvZmlsZVBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLnByb2ZpbGVQaG90byA9ICRzY29wZS5wcm9maWxlUGhvdG8gb3IgY29ubi52YWxcbiAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgaWYgY29ubi52YWwuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLnZhbCBhbmQgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbFxuICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLmNvbmZpcm1hdGlvbnMgKyBjb25uLnJlZnV0YXRpb25zID4gMFxuICAgICAgICAgIHBlcmNlbnRhZ2UgPSBjb25uLmNvbmZpcm1hdGlvbnMgKiAxMDAgLyAoY29ubi5jb25maXJtYXRpb25zICsgY29ubi5yZWZ1dGF0aW9ucylcbiAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICBhbHBoYSA9IGNvbm4uY29uZmlybWF0aW9ucyAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBjb25uLnF1aWNrQ29udGFjdFxuICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSBjb25uZWN0aW9uc1xuICAgICAgICAkc2NvcGUuZ2V0UGhvdG9zRnJvbUdyYXZhdGFyKClcbiAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAoJHNjb3BlLmluZm8ubmFtZSB8fCAkc2NvcGUuaW5mby5uaWNrbmFtZSB8fCAkc2NvcGUuaWRWYWx1ZSlcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyA9IChpZDEsIGlkMikgLT5cbiAgICAgIGdldFZlcmlmaWNhdGlvbnMgPSAkcSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaWYgISRzY29wZS52ZXJpZmljYXRpb25zLmxlbmd0aFxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICAgICAgbXNnID0gcm93LnZhbHVlXG4gICAgICAgICAgICAgIHVubGVzcyBtc2cuc2lnbmVkRGF0YVxuICAgICAgICAgICAgICAgIG1zZy5zaWduZWREYXRhID0gS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpLnBheWxvYWRPYmpcbiAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXSlcbiAgICAgICAgICAgICAgICBtc2cuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUobXNnLmF1dGhvckVtYWlsIG9yIG1zZy5zaWduZWREYXRhLmF1dGhvclswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgIGdldFZlcmlmaWNhdGlvbnMudGhlbiAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgIGhhc0lkMSA9IGhhc0lkMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGlkIGluIG1zZy5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgcmV0dXJuIG1zZ3MucHVzaCBtc2cgaWYgaWRbMF3CoD09IGlkMi5uYW1lIGFuZCBpZFsxXSA9PSBpZDIudmFsXG4gICAgICAgIHJldHVybiBtc2dzXG5cbiAgICAkc2NvcGUuY29ubmVjdGlvbkNsaWNrZWQgPSAoZXZlbnQsIGlkKSAtPlxuICAgICAgaWYgaWQuY29ubmVjdGluZ19tc2dzXG4gICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyhbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBpZCkudGhlbiAobXNncykgLT5cbiAgICAgICAgICBpZC5jb25uZWN0aW5nX21zZ3MgPSBtc2dzXG4gICAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcblxuICAgICRzY29wZS5nZXRTZW50TXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnNlbnQubG9hZGluZ1xuICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IHRydWVcbiAgICAgIHNlYXJjaEtleSA9ICcnXG4gICAgICBpZiAkc2NvcGUuc2VudC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICAkc2NvcGUuc2VudEluZGV4LnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgdiA9IHJvdy52YWx1ZVxuICAgICAgICAgIHYuc2VhcmNoS2V5ID0gcm93LmtleVxuICAgICAgICAgIG1zZ3MucHVzaCB2XG4gICAgICAgIHJldHVybiBtc2dzXG4gICAgICAudGhlbiAoc2VudCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBzZW50LCB7IHJlY2lwaWVudElzU2VsZjogZmFsc2UgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQubG9hZGluZ1xuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkLmxlbmd0aFxuICAgICAgICBzZWFyY2hLZXkgPSAkc2NvcGUucmVjZWl2ZWRbJHNjb3BlLnJlY2VpdmVkLmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXguc2VhcmNoVGV4dCgnJywgJHNjb3BlLmZpbHRlcnMubGltaXQsIHNlYXJjaEtleSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICB2ID0gcm93LnZhbHVlXG4gICAgICAgICAgdi5zZWFyY2hLZXkgPSByb3cua2V5XG4gICAgICAgICAgbXNncy5wdXNoIHZcbiAgICAgICAgcmV0dXJuIG1zZ3NcbiAgICAgIC50aGVuIChyZWNlaXZlZCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyByZWNlaXZlZCwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnJlY2VpdmVkLCByZWNlaXZlZClcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgcmVjZWl2ZWQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgc29ydGVkID0gcmVjZWl2ZWQuc29ydCAoYSxiKSAtPlxuICAgICAgICAgICAgcmV0dXJuIDEgaWYgYS5kaXN0YW5jZSA+IGIuZGlzdGFuY2VcbiAgICAgICAgICAgIHJldHVybiAtMSBpZiBhLmRpc3RhbmNlIDwgYi5kaXN0YW5jZVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICBzb3J0ZWQuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgICAgcmV0dXJuIGlmICRzY29wZS50aHVtYnNVcC5sZW5ndGggPj0gMTIgYW5kICRzY29wZS50aHVtYnNEb3duLmxlbmd0aCA+PSAxMlxuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuZGF0YS5tYXhSYXRpbmcgKyBtc2cuZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgICAgaWYgJHNjb3BlLnRodW1ic1VwLmxlbmd0aCA8IDEyIGFuZCBtc2cuZGF0YS5yYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgZWxzZSBpZiAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPCAxMiBhbmQgIG1zZy5yYXRpbmcgPCBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuZ2V0UGhvdG9zRnJvbUdyYXZhdGFyID0gLT5cbiAgICAgIGVtYWlsID0gJHNjb3BlLmluZm8uZW1haWwgb3IgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShlbWFpbCkudG9TdHJpbmcoKVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgIGFkZExvY2FsTWVzc2FnZXMgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgIGZvciBtc2cgaW4gT2JqZWN0LnZhbHVlcyhtc2dzKVxuICAgICAgICBpZiBtc2cuZGF0YS5yZWNpcGllbnRbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50WzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnVuc2hpZnQobXNnKVxuICAgICAgICBpZiBtc2cuZGF0YS5hdXRob3JbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEuYXV0aG9yWzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnNlbnQudW5zaGlmdChtc2cpXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmdldElkZW50aXR5UHJvZmlsZSh7IHR5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZSB9KS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5UHJvZmlsZSA9IHByb2ZpbGVcbiAgICAgICAgICAgIGFkZExvY2FsTWVzc2FnZXMoKVxuICAgICAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgICAgICAgIGlmICEocHJvZmlsZS5zZW50IGFuZCBwcm9maWxlLnJlY2VpdmVkKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3Npbmcgc2VudCBvciByZWNlaXZlZCBpbmRleDogJyArIEpTT04uc3RyaW5naWZ5KHByb2ZpbGUpKVxuICAgICAgICAgICAgJHEuYWxsKFtcbiAgICAgICAgICAgICAgJHdpbmRvdy5tZXJrbGVCdHJlZS5NZXJrbGVCVHJlZS5nZXRCeUhhc2gocHJvZmlsZS5zZW50LCAkc2NvcGUuaXBmc1N0b3JhZ2UpLFxuICAgICAgICAgICAgICAkd2luZG93Lm1lcmtsZUJ0cmVlLk1lcmtsZUJUcmVlLmdldEJ5SGFzaChwcm9maWxlLnJlY2VpdmVkLCAkc2NvcGUuaXBmc1N0b3JhZ2UpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIC50aGVuIChpbmRleGVzKSAtPlxuICAgICAgICAgICAgJHNjb3BlLnNlbnRJbmRleCA9IGluZGV4ZXNbMF1cbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4ID0gaW5kZXhlc1sxXVxuICAgICAgICAgICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyAwXG4gICAgICAgICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgMFxuICAgICAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGZldGNoaW5nIHByb2ZpbGUnLCBlcnJcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJyBhbmQgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLm5vZGVJbmZvLmtleUlEXG4gICAgICAgICRzY29wZS5kaXN0YW5jZSA9IDBcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuXVxuIl19

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
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+stats.received_positive+stats.received_neutral+stats.received_negative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind=connections.length></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon id="{ gravatar: gravatar }" border=4 positive-score=stats.received_positive negative-score=stats.received_negative width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(info.name||info.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=info.name||info.nickname></span> <span ng-hide="!info.nickname || !info.name || info.nickname === info.name">(<span class=text-muted ng-bind=info.nickname></span>) </span><span ng-if="distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="distance > 0" ng-bind="distance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="stats.received_positive || stats.received_negative"><span ng-bind="stats.received_positive / (stats.received_positive+stats.received_neutral+stats.received_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.received_positive || stats.received_negative)">&mdash; </span></b><span ng-if="stats.sent_positive || stats.sent_negative"><br>Sent: <span ng-if="stats.sent_positive || stats.sent_negative"><span ng-bind="stats.sent_positive / (stats.sent_positive+stats.sent_neutral+stats.sent_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.sent_positive || stats.sent_negative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.received_positive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.received_neutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.received_negative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.sent_positive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.sent_neutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.sent_negative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && thumbsUp.length > 0" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div><div ng-if="isUniqueType && thumbsDown.length > 0" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="distance-container mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon id=msg class="square no-glow" border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span class=distance ng-bind="msg.distance | ordinal"></span></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span> <span class=visible-xs>Recv ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="create($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !receivedIndex || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.received_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.received_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.received_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\'" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!received.loading && received.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !sentIndex || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.sent_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.sent_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.sent_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\'" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sent.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connections.length > 0" ng-bind="connections.length - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" ng-if=!id.isCurrent style={{id.rowStyle}} ng-class=id.rowClass ng-click="connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="create($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="create($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon id=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="create($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { confirmations: 0, refutations: 0, type: newVerification.type, value: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>IPFS mirrors</h4><ul><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p><p>This Identifi user interface uses 3rd party authentication options and does not store login credentials.</p><h3>Node info</h3><pre ng-bind="nodeInfo | json"></pre></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><span class="distance-container mar-right10"><identicon id="{ gravatar: match.label.gravatar }" border=3 width=46 positive-score=match.label.pos negative-score=match.label.neg></identicon><span ng-if="match.label.distance >= 0" class=distance ng-bind="match.label.distance | ordinal"></span> </span><span ng-bind-html="match.label.name | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-8 col-md-offset-2"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=8 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon id=nodeInfo.profile border=3 width=35 positive-score=nodeInfo.profile.pos negative-score=nodeInfo.profile.neg></identicon></span><span ng-bind=nodeInfo.profile.name></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message msg-data=msg ng-repeat="msg in msgs.list | filter:msgFilter | orderBy:\'-data.timestamp\'" ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><span class="distance-container mar-right5"><identicon id=message.verifiedBy border=3 width=35 positive-score=message.verifiedBy.pos negative-score=message.verifiedBy.neg></identicon><span ng-if="message.verifiedBy.dist >= 0" class=distance ng-bind="message.verifiedBy.dist | ordinal"></span> </span><span ng-bind=message.verifiedBy.name></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.data.type == \'verify_identity\'}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': $ctrl.msgData.data.type != \'verify_identity\', \'panel-heading\': $ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\' }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><span class="distance-container mar-right10"><identicon id=$ctrl.msgData border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-if="$ctrl.msgData.distance >= 0" class=distance ng-bind="$ctrl.msgData.distance | ordinal"></span> </span><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block></a></p><p ng-if="$ctrl.msgData.data.type == \'verify_identity\' || $ctrl.msgData.data.type == \'unverify_identity\'"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.data.type == \'verify_identity\'"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.data.type == \'unverify_identity\'"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);