(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNuRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsa0JBQUEsQ0FBbUIsS0FBbkIsQ0FBbkI7TUFERjtJQURtRCxDQUFGO0dBQW5EOztFQUlBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxvQkFBekMsRUFBK0Q7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMvRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQrRCxDQUFGO0dBQS9EOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxXQUF6QyxFQUFzRCxRQUFBLENBQUMsSUFBRCxDQUFBO1dBQ3BELFFBQUEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFBO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxRQUFBLENBQUEsQ0FBQTtXQUNsRCxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ0UsVUFBQSxDQUFBLEVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJ11cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZXNjYXBlJywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dClcbiBdXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2hpZ2hsaWdodCcsICgkc2NlKSAtPlxuICAodGV4dCwgcGhyYXNlKSAtPlxuICAgIGlmIHR5cGVvZiB0ZXh0ID09ICdzdHJpbmcnIGFuZCBwaHJhc2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBwaHJhc2UgKyAnKScsICdnaScpLCAnPGI+JDE8L2I+JylcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sIHRleHQudG9TdHJpbmcoKVxuICAgIHJldHVybiB0ZXh0XG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ29yZGluYWwnLCAtPlxuICAoaW5wdXQpIC0+XG4gICAgcyA9IFtcbiAgICAgICd0aCdcbiAgICAgICdzdCdcbiAgICAgICduZCdcbiAgICAgICdyZCdcbiAgICBdXG4gICAgdiA9IGlucHV0ICUgMTAwXG4gICAgaW5wdXQgKyAoc1sodiAtIDIwKSAlIDEwXSBvciBzW3ZdIG9yIHNbMF0pXG4iXX0=

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      ipfs: '=?',
      msgData: '=',
      pageInfo: '=?',
      showRecipient: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsT0FBQSxFQUFTLEdBRFQ7TUFFQSxRQUFBLEVBQVUsSUFGVjtNQUdBLGFBQUEsRUFBZTtJQUhmLENBREY7SUFLQSxXQUFBLEVBQWE7RUFMYixDQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIGlwZnM6ICc9PydcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICAgIHNob3dSZWNpcGllbnQ6ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

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
  // coffeelint: disable=max_line_length
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance, scope.ipfs);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxXQURiLEVBQzBCLFFBQUEsQ0FBQSxDQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7UUFDQSxJQUFBLEVBQU07TUFETixDQURGO01BR0EsSUFBQSxFQUFNLFFBQUEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFBO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsY0FBQTtVQUFBLElBQUcsS0FBSyxDQUFDLFFBQU4sSUFBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFwQztZQUNFLFNBQUEsR0FBWSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWYsQ0FBeUIsS0FBSyxDQUFDLEtBQS9CLEVBQXNDLEtBQUssQ0FBQyxNQUE1QyxFQUFvRCxLQUFLLENBQUMsWUFBMUQsRUFBd0UsS0FBSyxDQUFDLElBQTlFO1lBQ1osT0FBTyxDQUFDLEtBQVIsQ0FBQTttQkFDQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFIRjs7UUFETztlQUtULEtBQUssQ0FBQyxXQUFOLENBQWtCLENBQUMsVUFBRCxDQUFsQixFQUFnQyxNQUFoQztNQVJJO0lBSE47RUFEc0IsQ0FEMUI7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgY29mZmVlbGludDogZGlzYWJsZT1tYXhfbGluZV9sZW5ndGhcbmFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2lkZW50aWNvbicsIC0+XG4gICAgc2NvcGU6XG4gICAgICBpZGVudGl0eTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlLCBzY29wZS5pcGZzKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

(function() {
  angular.module('identifiAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('identifiAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixRQUFBLENBQUEsQ0FBQTtXQUNwQixRQUFBLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLENBQUE7TUFDRSxLQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsRUFBcUIsUUFBQSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQUE7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFFBQUEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFBO1dBQ2hCLFFBQUEsQ0FBQyxJQUFELENBQUE7TUFDRSxRQUFBLENBQVMsUUFBQSxDQUFBLENBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

(function() {
  // Messages service used to communicate with Messages REST endpoints
  angular.module('identifiAngular').factory('Messages', [
    '$resource',
    '$location',
    function($resource,
    $location) {
      var host,
    path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxVQUExQyxFQUFzRDtJQUNwRCxXQURvRDtJQUVwRCxXQUZvRDtJQUdwRCxRQUFBLENBQUMsU0FBRDtJQUFZLFNBQVosQ0FBQTtBQUNFLFVBQUEsSUFBQTtJQUFBO01BQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDUCxJQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxhQUFYLENBQUgsR0FBaUMsb0JBQWpDLEdBQTJEO2FBQ2xFLFNBQUEsQ0FBVSxJQUFBLEdBQU8sa0JBQWpCO0lBSEYsQ0FIb0Q7R0FBdEQ7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgTWVzc2FnZXMgc2VydmljZSB1c2VkIHRvIGNvbW11bmljYXRlIHdpdGggTWVzc2FnZXMgUkVTVCBlbmRwb2ludHNcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5mYWN0b3J5ICdNZXNzYWdlcycsIFtcbiAgJyRyZXNvdXJjZSdcbiAgJyRsb2NhdGlvbidcbiAgKCRyZXNvdXJjZSwgJGxvY2F0aW9uKSAtPlxuICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICBob3N0ID0gaWYgcGF0aC5tYXRjaCAvXFwvaXBbbmZdc1xcLy8gdGhlbiAnaHR0cHM6Ly9pZGVudGkuZmkvJyBlbHNlICcnXG4gICAgJHJlc291cmNlIGhvc3QgKyAnYXBpL21lc3NhZ2VzLzppZCdcbl1cbiJdfQ==

(function() {
  'use strict';
  var hasProp = {}.hasOwnProperty;

  // Messages controller
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    // 'Authentication'
    'Messages',
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    Messages,
    config,
    $timeout,
    localStorageService) { //, Authentication
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs,
    prop,
    value;
        msgs = {};
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
        return new Array(Math.max(1,
    Math.abs(rating)));
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
        var cursor;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs.loading = true;
        // Get latest messages from ipfs index
        if ($scope.msgs.list.length) {
          cursor = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        return $scope.identifiIndex.getMessagesByTimestamp($scope.filters.limit,
    cursor).then(function(messages) {
          console.log('msgs',
    messages);
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list,
    messages);
          if (messages.length < $scope.filters.limit - 1) { // bug
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
        console.log('setFilters');
        angular.extend($scope.filters,
    filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {},
    true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyID = $scope.message.getSignerKeyID();
            return $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID,
    'keyID');
          };
          return $scope.$watch('apiReady',
    function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) { // looks like an ipfs address
                return $scope.ipfsGet(hash).then(function(res) {
                  var s;
                  s = JSON.parse(res.toString());
                  console.log('msg from ipfs',
    res,
    s);
                  return $window.identifiLib.Message.fromSig(s).then(function(r) {
                    $scope.message = r;
                    $scope.message.ipfsUri = hash;
                    return processResponse();
                  });
                }).catch(function(e) {
                  return console.log(e);
                });
              }
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsMkJBQUE7OztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7O0lBUWpFLFVBUmlFO0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsUUFBOUQ7SUFBd0UsTUFBeEU7SUFBZ0YsUUFBaEY7SUFBMEYsbUJBQTFGLENBQUEsRUFBQTtNQUNFLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLEdBQXNCO01BRXRCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLFlBQUEsSUFBQTtJQUFBLElBQUE7SUFBQTtRQUFBLElBQUEsR0FBTyxDQUFBO2VBQ1AsTUFBTSxDQUFDLElBQVAsR0FDRTtVQUFBLE9BQUEsRUFBUyxLQUFUO1VBQ0EsUUFBQSxFQUFVLEtBRFY7VUFFQSxJQUFBOztBQUFhO1lBQUEsS0FBQSxZQUFBOzs7MkJBQU47WUFBTSxDQUFBOzs7UUFGYjtNQUhlO01BTW5CLE1BQU0sQ0FBQyxTQUFQLENBQUE7TUFFQSxNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO2VBQ2pCLElBQUksS0FBSixD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RG5CLENBWmlFO0dBQW5FO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgTWVzc2FnZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01lc3NhZ2VzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnTWVzc2FnZXMnXG4gICdjb25maWcnXG4gICckdGltZW91dCdcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgTWVzc2FnZXMsIGNvbmZpZywgJHRpbWVvdXQsIGxvY2FsU3RvcmFnZVNlcnZpY2UpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcblxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSAncmF0aW5nJ1xuXG4gICAgJHNjb3BlLnJlc2V0TXNncyA9IC0+XG4gICAgICBtc2dzID0ge31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6ICh2YWx1ZSBmb3Igb3duIHByb3AsIHZhbHVlIG9mIG1zZ3MpXG4gICAgJHNjb3BlLnJlc2V0TXNncygpXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuZmluZCA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3MubG9hZGluZ1xuICAgICAgJHNjb3BlLm1zZ3MubG9hZGluZyA9IHRydWVcbiAgICAgICMgR2V0IGxhdGVzdCBtZXNzYWdlcyBmcm9tIGlwZnMgaW5kZXhcbiAgICAgIGlmICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldE1lc3NhZ2VzQnlUaW1lc3RhbXAoJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChtZXNzYWdlcykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ21zZ3MnLCBtZXNzYWdlc1xuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIG1lc3NhZ2VzXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5tc2dzLmxpc3QsIG1lc3NhZ2VzKVxuICAgICAgICBpZiBtZXNzYWdlcy5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDEgIyBidWdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGNvbnNvbGUubG9nICdzZXRGaWx0ZXJzJ1xuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5yZXNldE1zZ3MoKVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgICMgRmluZCBleGlzdGluZyBNZXNzYWdlXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgaWYgJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIGhhc2ggPSAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlID0gLT5cbiAgICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFskc2NvcGUubWVzc2FnZV0sIHt9LCB0cnVlKVxuICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJ01lc3NhZ2UgJyArIGhhc2hcbiAgICAgICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSgkc2NvcGUubWVzc2FnZSlcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCA9ICRzY29wZS5tZXNzYWdlLmdldFNpZ25lcktleUlEKClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlELCAna2V5SUQnKVxuXG4gICAgICAgICRzY29wZS4kd2F0Y2ggJ2FwaVJlYWR5JywgKGlzUmVhZHkpIC0+XG4gICAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICAgaWYgaGFzaC5tYXRjaCAvXlFtWzEtOUEtWmEtel17NDAsNTB9JC8gIyBsb29rcyBsaWtlIGFuIGlwZnMgYWRkcmVzc1xuICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgICAgcyA9IEpTT04ucGFyc2UocmVzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cgJ21zZyBmcm9tIGlwZnMnLCByZXMsIHNcbiAgICAgICAgICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbVNpZyhzKS50aGVuIChyKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSByXG4gICAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZS5pcGZzVXJpID0gaGFzaFxuICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcbiAgICAgICAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIGVcblxuICAgIHJldHVyblxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$state',
    'config',
    'localStorageService',
    '$uibModal',
    '$window',
    '$q',
    'focus',
    //'Authentication'
    //'Menus'
    //'Persona'
    function($scope,
    $rootScope,
    $location,
    $http,
    $state,
    config,
    localStorageService,
    $uibModal,
    $window,
    $q,
    focus) { // Authentication, Menus, Persona
      var defaultIndexKeyID,
    privateKey,
    scrollTo,
    setIndex;
      if ($window.location.protocol === "https:") {
        $scope.gun = new Gun(['https://identifi.herokuapp.com/gun']);
      } else {
        $scope.gun = new Gun(['http://localhost:8765/gun',
    'https://identifi.herokuapp.com/gun']);
      }
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        start: true,
        repo: 'ipfs7-identifi'
      });
      $scope.capitalizeWords = function(s) {
        if (s && s.length) {
          return (s.split(' ').map(function(word) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
          })).join(' ');
        } else {
          return s;
        }
      };
      $scope.searchRequest = null;
      $scope.search = function(query,
    limit) {
        var cursor,
    searchKey;
        $scope.ids.loading = true;
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 30;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        $scope.searchRequest = $scope.identifiIndex.search(searchKey,
    void 0,
    limit,
    cursor).then(function(identities) {
          return {identities,
    searchKey};
        });
        $scope.searchRequest = $scope.searchRequest.then(function(res) {
          var identities;
          if (res.searchKey !== $scope.searchKey) {
            return;
          }
          identities = res.identities;
          console.log(identities);
          if (limit) {
            identities.splice(limit);
          }
          identities.forEach(function(i) {
            i.gun.on(function(data) {
              i.data = data;
              return i.gun.get('linkTo').once(function(linkTo) {
                return $scope.$apply(function() {
                  return i.linkTo = linkTo;
                });
              });
            });
            return $scope.setIdentityNames(i,
    true);
          });
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) { // search key changed
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          if (identities.length && $scope.ids.list.length && $scope.getIdKey(identities[0].linkTo) === $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)) {
            identities.shift(); // Prevent duplicate
          }
          $scope.ids.list = $scope.ids.list.concat(identities);
          if (identities.length > 0 && $scope.ids.list.length === identities.length) {
            $scope.ids.activeKey = 0;
            $scope.ids.list[0].active = true;
          } else {
            $scope.ids.activeKey = -1;
          }
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
        return $scope.searchRequest;
      };
      setIndex = function(results) {
        $scope.identifiIndex = results;
        console.log('Got index',
    $scope.identifiIndex);
        $scope.identifiIndex.gun.get('identitiesByTrustDistance').once(function() {
          return $scope.identifiIndex.getViewpoint().then(function(vp) {
            console.log('got viewpoint',
    vp);
            $scope.viewpoint = vp;
            $scope.viewpoint.gun.get('linkTo').open(function(linkTo) {
              return $scope.viewpoint.linkTo = linkTo;
            });
            return $scope.viewpoint.gun.get('attrs').open(function(attrs) {
              $scope.viewpoint.attrs = attrs;
              return $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
            });
          });
        });
        return $scope.identifiIndex.gun.get('identitiesBySearchKey').once(function() {
          $scope.apiReady = true;
          if ($scope.query.term !== '') {
            $scope.query.term = '';
          }
          $scope.ids.list = [];
          $scope.ids.finished = false;
          return $scope.search();
        });
      };
      defaultIndexKeyID = 'j0QRrzOQrPCJlSgPet9uhrTF+0jRRbrOjo3S1V+QkHw=';
      $scope.loadDefaultIndex = function() {
        return setIndex(new $window.identifiLib.Index($scope.gun.get('identifi')));
      };
      $scope.loginWithKey = function(privateKeySerialized) {
        var gunNode,
    keyID,
    viewpoint;
        $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized);
        localStorageService.set('identifiKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $window.identifiLib.Key.getId($scope.privateKey)
        };
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        keyID = $window.identifiLib.Key.getId($scope.privateKey);
        viewpoint = new $window.identifiLib.Attribute(['keyID',
    keyID]);
        if (keyID === defaultIndexKeyID) {
          gunNode = $scope.gun.get('identifi');
        } else {
          gunNode = $scope.gun.get(keyID);
        }
        setIndex(new $window.identifiLib.Index.create(gunNode,
    viewpoint));
        return $scope.authentication.identity = $scope.identifiIndex.get(keyID,
    'keyID');
      };
      privateKey = localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      } else {
        $scope.loadDefaultIndex();
      }
      $scope.ipfs.on('ready',
    function() {
        $scope.ipfsReady = true;
        return $window.ipfs = $scope.ipfs;
      });
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    getJson) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.files.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (getJson) {
                file = JSON.parse(file.toString());
              }
              return resolve(file);
            });
          };
          if ($scope.ipfsReady) {
            return go();
          } else {
            return $scope.ipfs.on('ready',
    function() {
              return go();
            });
          }
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
      // Create new Message
      $scope.createMessage = function(event,
    params,
    id) {
        var message,
    options;
        if (event) {
          event.stopPropagation();
        }
        // Create new Message object
        message = null;
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = $window.identifiLib.Message.createRating(params,
    $scope.privateKey);
        } else {
          message = $window.identifiLib.Message.createVerification(params,
    $scope.privateKey);
        }
        options = {};
        return message.then(function(m) {
          console.log(m);
          return $scope.identifiIndex.addMessage(m,
    $scope.ipfs); // publishMessage
        }).catch(function(e) {
          console.error(e);
          return $scope.error = e;
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1; // because the user doesn't have a trust index yet
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
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.loginModal.close();
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText,
    squarify) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.squarify = squarify;
        $scope.uploadModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/upload.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.uploadModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.uploadModal.close();
        });
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          console.log('uploading',
    blob);
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            console.log('buffer',
    buffer);
            return $scope.ipfs.files.add(buffer,
    function(err,
    files) {
              if (err) {
                return reject('adding to ipfs failed',
    err);
              } else {
                resolve(files);
                return console.log('done:',
    err,
    files);
              }
            });
          };
          return fileReader.readAsArrayBuffer(blob);
        });
      };
      $scope.generateKey = function() {
        return $window.identifiLib.Key.generate().then(function(key) {
          return $scope.$apply(function() {
            $scope.privateKey = key;
            console.log($scope.privateKey);
            return $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
          });
        });
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeySerialized);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeySerialized = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        $scope.publicKey = null;
        return $scope.loadDefaultIndex();
      };
      $scope.msgFilter = function(value,
    index,
    array) {
        var data,
    neutralRating;
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
          if ($scope.filters.max_distance === 0 && typeof value.authorTrustDistance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.authorTrustDistance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.logoClicked = function() {
        focus('searchFocus');
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
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var modalInstance,
    t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        $scope.message.recipient = $scope.message.getRecipient($scope.identifiIndex);
        $scope.message.recipient.gun.get('attrs').open(function(d) {
          var mva;
          mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
          if (mva.name) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.name.attribute.val;
            });
          } else if (mva.nickname) {
            return $scope.$apply(function() {
              return $scope.message.recipient_name = mva.nickname.attribute.val;
            });
          }
        });
        $scope.message.signerKeyID = $scope.message.getSignerKeyID();
        $scope.message.verifiedBy = $scope.identifiIndex.get($scope.message.signerKeyID,
    'keyID');
        modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        modalInstance.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart',
    function() {
          return modalInstance.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions,
    findRecipient) {
        var processMessage;
        processMessage = function(msg) {
          msg.data = msg.signedData;
          msg.author = msg.getAuthor($scope.identifiIndex);
          msg.author.gun.get('trustDistance').on(function(d) {
            return msg.authorTrustDistance = d;
          });
          msg.author.gun.get('attrs').open(function(d) {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
            if (mva.name) {
              return $scope.$apply(function() {
                return msg.author_name = mva.name.attribute.val;
              });
            } else if (mva.nickname) {
              return $scope.$apply(function() {
                return msg.author_name = mva.nickname.attribute.val;
              });
            }
          });
          if (findRecipient) {
            msg.recipient = msg.getRecipient($scope.identifiIndex);
            msg.recipient.gun.get('attrs').open(function(d) {
              var mva;
              mva = $window.identifiLib.Identity.getMostVerifiedAttributes(d);
              if (mva.name) {
                return $scope.$apply(function() {
                  return msg.recipient_name = mva.name.attribute.val;
                });
              } else if (mva.nickname) {
                return $scope.$apply(function() {
                  return msg.recipient_name = mva.nickname.attribute.val;
                });
              }
            });
          }
          return $scope.$apply(function() {
            var alpha,
    i,
    index,
    maxRatingDiff,
    minRatingDiff,
    neutralRating,
    rating,
    ref,
    ref1,
    signedData,
    smallestIndex;
            // TODO: make sure message signature is checked
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
              case 'verification':
                msg.iconStyle = 'glyphicon glyphicon-ok-sign';
                msg.hasSuccess = 'has-success';
                return msg.isVerification = true;
              case 'unverify_identity':
              case 'unverification':
                msg.iconStyle = 'glyphicon glyphicon-remove negative';
                msg.hasSuccess = 'has-error';
                msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
                return msg.isUnverification = true;
              case 'rating':
                rating = signedData.rating;
                neutralRating = (signedData.minRating + signedData.maxRating) / 2;
                maxRatingDiff = signedData.maxRating - neutralRating;
                minRatingDiff = signedData.minRating - neutralRating;
                if (rating > neutralRating) {
                  if (signedData.context === 'verifier') {
                    msg.iconStyle = 'fa fa-shield positive';
                  } else {
                    msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                    msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
                  }
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
          });
        };
        return angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          return processMessage(msg);
        });
      };
      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess',
    function() {
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
            $window.scrollTo(0,
    pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0,
    pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.setIdentityNames = function(i,
    htmlSafe,
    setTitle) {
        i.verified = false;
        return i.gun.get('attrs').open(function(attrs) {
          return $scope.$apply(function() {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
            if (mva.name) {
              i.primaryName = mva.name.attribute.val;
              i.hasProperName = true;
              if (mva.name.verified) {
                i.verified = true;
              }
            } else if (mva.nickname) {
              i.primaryName = mva.nickname.attribute.val;
              i.hasProperName = true;
            } else {
              i.primaryName = Object.values(attrs)[0].val;
            }
            if (i.primaryName) {
              if (mva.nickname && mva.nickname.attribute.val !== i.primaryName) {
                i.nickname = mva.nickname.attribute.val;
                if (htmlSafe) {
                  i.nickname = i.nickname.replace('<',
    '&lt;');
                }
              }
              if (htmlSafe) {
                i.primaryName = i.primaryName.replace('<',
    '&lt;');
              }
            }
            if (setTitle) {
              return $scope.setPageTitle(i.primaryName);
            }
          });
        });
      };
      $scope.searchKeydown = function(event) {
        var el,
    id,
    wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > -1) {
              $scope.addEntryActive = false;
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.activeKey--;
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = true;
              }
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              if ($scope.ids.activeKey >= 0) {
                $scope.ids.list[$scope.ids.activeKey].active = false;
              }
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            if ($scope.ids.activeKey === -1) {
              return $state.go('identities.create');
            } else {
              id = $scope.ids.list[$scope.ids.activeKey];
              return $state.go('identities.show',
    {
                type: id.linkTo.name,
                value: id.linkTo.val
              });
            }
            break;
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
            }),
    300);
            $scope.timer = wait;
            break;
        }
      };
      return $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show',
    {
          type: item.linkTo.name,
          value: item.linkTo.val
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsU0FUNkQ7SUFVN0QsSUFWNkQ7SUFXN0QsT0FYNkQ7Ozs7SUFnQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLE9BRGhDO0lBQ3lDLEVBRHpDO0lBQzZDLEtBRDdDLENBQUEsRUFBQTtBQUVFLFVBQUEsaUJBQUE7SUFBQSxVQUFBO0lBQUEsUUFBQTtJQUFBO01BQUEsSUFBRyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQWpCLEtBQTZCLFFBQWhDO1FBQ0UsTUFBTSxDQUFDLEdBQVAsR0FBYSxJQUFJLEdBQUosQ0FBUSxDQUFDLG9DQUFELENBQVIsRUFEZjtPQUFBLE1BQUE7UUFHRSxNQUFNLENBQUMsR0FBUCxHQUFhLElBQUksR0FBSixDQUFRLENBQUMsMkJBQUQ7SUFBOEIsb0NBQTlCLENBQVIsRUFIZjtPQUFBOztNQU1BLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLENBQUEsRUFOeEI7TUFRQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUMsRUFBRCxDQUFBO1FBQ2hCLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxFQUFkLENBQUg7QUFDRSxpQkFBTyxrQkFBQSxDQUFtQixFQUFHLENBQUEsQ0FBQSxDQUF0QixDQUFBLEdBQTRCLEdBQTVCLEdB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MEN2QixNQUFNLENBQUMsb0JBQVAsR0FBOEIsUUFBQSxDQUFDLElBQUQsQ0FBQTtRQUM1QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWO0lBQTZCO1VBQUUsSUFBQSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFBN0MsQ0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQTVlaEMsQ0FoQjZEO0dBQS9EO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRxJ1xuICAnZm9jdXMnXG5cbiAgIydBdXRoZW50aWNhdGlvbidcbiAgIydNZW51cydcbiAgIydQZXJzb25hJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSwgZm9jdXMpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PSBcImh0dHBzOlwiXG4gICAgICAkc2NvcGUuZ3VuID0gbmV3IEd1bihbJ2h0dHBzOi8vaWRlbnRpZmkuaGVyb2t1YXBwLmNvbS9ndW4nXSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUuZ3VuID0gbmV3IEd1bihbJ2h0dHA6Ly9sb2NhbGhvc3Q6ODc2NS9ndW4nLCAnaHR0cHM6Ly9pZGVudGlmaS5oZXJva3VhcHAuY29tL2d1biddKVxuXG4gICAgIyBzZXQgYXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fSAjIEF1dGhlbnRpY2F0aW9uXG5cbiAgICAkc2NvcGUuZ2V0SWRLZXkgPSAoaWQpIC0+XG4gICAgICBpZiBBcnJheS5pc0FycmF5KGlkKVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkWzBdKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZFsxXSlcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZC5uYW1lKSArICc6JyArIGVuY29kZVVSSUNvbXBvbmVudChpZC52YWwpXG5cbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPSB7IGxpc3Q6IFtdIH1cbiAgICAkc2NvcGUucGhvbmVSZWdleCA9IC9eXFwrP1xcZCskL1xuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczctaWRlbnRpZmknXG4gICAgKVxuXG4gICAgJHNjb3BlLmNhcGl0YWxpemVXb3JkcyA9IChzKSAtPlxuICAgICAgaWYgcyBhbmQgcy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIChzLnNwbGl0KCcgJykubWFwICh3b3JkKSAtPiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkWzEuLi0xXS50b0xvd2VyQ2FzZSgpKS5qb2luICcgJ1xuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gc1xuXG4gICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSBudWxsXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICAkc2NvcGUuaWRzLmxvYWRpbmcgPSB0cnVlXG4gICAgICBzZWFyY2hLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgJHNjb3BlLnNlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5wcmV2aW91c1NlYXJjaEtleVxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciAzMFxuICAgICAgY3Vyc29yID0gZmFsc2VcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKGlkZW50aXRpZXMpIC0+IHtpZGVudGl0aWVzLCBzZWFyY2hLZXl9XG4gICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5zZWFyY2hSZXF1ZXN0LnRoZW4gKHJlcykgLT5cbiAgICAgICAgcmV0dXJuIGlmIHJlcy5zZWFyY2hLZXkgIT0gJHNjb3BlLnNlYXJjaEtleVxuICAgICAgICBpZGVudGl0aWVzID0gcmVzLmlkZW50aXRpZXNcbiAgICAgICAgY29uc29sZS5sb2cgaWRlbnRpdGllc1xuICAgICAgICBpZGVudGl0aWVzLnNwbGljZShsaW1pdCkgaWYgbGltaXRcbiAgICAgICAgaWRlbnRpdGllcy5mb3JFYWNoIChpKSAtPlxuICAgICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgICAgaS5ndW4uZ2V0KCdsaW5rVG8nKS5vbmNlIChsaW5rVG8pIC0+XG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgICBpLmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCAmJiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoICYmXG4gICAgICAgICRzY29wZS5nZXRJZEtleShpZGVudGl0aWVzWzBdLmxpbmtUbykgPT0gJHNjb3BlLmdldElkS2V5KCRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0ubGlua1RvKVxuICAgICAgICAgIGlkZW50aXRpZXMuc2hpZnQoKSAjIFByZXZlbnQgZHVwbGljYXRlXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdC5jb25jYXQoaWRlbnRpdGllcylcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggPT0gaWRlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IDBcbiAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICBlbHNlXG4gICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAtMVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuICAgICAgcmV0dXJuICRzY29wZS5zZWFyY2hSZXF1ZXN0XG5cbiAgICBzZXRJbmRleCA9IChyZXN1bHRzKSAtPlxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXggPSByZXN1bHRzXG4gICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4Lmd1bi5nZXQoJ2lkZW50aXRpZXNCeVRydXN0RGlzdGFuY2UnKS5vbmNlIC0+XG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFZpZXdwb2ludCgpLnRoZW4gKHZwKSAtPlxuICAgICAgICAgIGNvbnNvbGUubG9nICdnb3Qgdmlld3BvaW50JywgdnBcbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50ID0gdnBcbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2xpbmtUbycpLm9wZW4gKGxpbmtUbykgLT5cbiAgICAgICAgICAgICRzY29wZS52aWV3cG9pbnQubGlua1RvID0gbGlua1RvXG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5hdHRycyA9IGF0dHJzXG4gICAgICAgICAgICAkc2NvcGUudmlld3BvaW50Lm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5ndW4uZ2V0KCdpZGVudGl0aWVzQnlTZWFyY2hLZXknKS5vbmNlIC0+XG4gICAgICAgICRzY29wZS5hcGlSZWFkeSA9IHRydWVcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuc2VhcmNoKClcblxuICAgIGRlZmF1bHRJbmRleEtleUlEID0gJ2owUVJyek9RclBDSmxTZ1BldDl1aHJURiswalJSYnJPam8zUzFWK1FrSHc9J1xuICAgICRzY29wZS5sb2FkRGVmYXVsdEluZGV4ID0gLT5cbiAgICAgIHNldEluZGV4IG5ldyAkd2luZG93LmlkZW50aWZpTGliLkluZGV4KCRzY29wZS5ndW4uZ2V0KCdpZGVudGlmaScpKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5U2VyaWFsaXplZCkgLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZnJvbUp3ayhwcml2YXRlS2V5U2VyaWFsaXplZClcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdpZGVudGlmaUtleScsIHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2V0SWQoJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5jbG9zZSgpIGlmICRzY29wZS5sb2dpbk1vZGFsXG4gICAgICBrZXlJRCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdldElkKCRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgdmlld3BvaW50ID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlKFsna2V5SUQnLCBrZXlJRF0pXG4gICAgICBpZiBrZXlJRCA9PSBkZWZhdWx0SW5kZXhLZXlJRFxuICAgICAgICBndW5Ob2RlID0gJHNjb3BlLmd1bi5nZXQoJ2lkZW50aWZpJylcbiAgICAgIGVsc2VcbiAgICAgICAgZ3VuTm9kZSA9ICRzY29wZS5ndW4uZ2V0KGtleUlEKVxuICAgICAgc2V0SW5kZXggbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXguY3JlYXRlKGd1bk5vZGUsIHZpZXdwb2ludClcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldChrZXlJRCwgJ2tleUlEJylcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcbiAgICBlbHNlXG4gICAgICAkc2NvcGUubG9hZERlZmF1bHRJbmRleCgpXG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgJHNjb3BlLmlwZnNSZWFkeSA9IHRydWVcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSWRlbnRpZmknXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgZ2V0SnNvbikgLT5cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSAocmVzb2x2ZSkgLT5cbiAgICAgICAgZ28gPSAtPlxuICAgICAgICAgICRzY29wZS5pcGZzLmZpbGVzLmNhdCh1cmkpLnRoZW4gKGZpbGUpIC0+XG4gICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpXG4gICAgICAgICAgICBpZiBnZXRKc29uXG4gICAgICAgICAgICAgIGZpbGUgPSBKU09OLnBhcnNlKGZpbGUudG9TdHJpbmcoKSlcbiAgICAgICAgICAgIHJlc29sdmUgZmlsZVxuXG4gICAgICAgIGlmICRzY29wZS5pcGZzUmVhZHlcbiAgICAgICAgICBnbygpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgICAgICAgZ28oKVxuXG4gICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgcmF0aW5nOiAxXG4gICAgICBjb21tZW50OiAnJ1xuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIHBhcmFtcywgaWQpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlID0gbnVsbFxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgcGFyYW1zLm1heFJhdGluZyB8PSAzXG4gICAgICAgIHBhcmFtcy5taW5SYXRpbmcgfD0gLTNcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVSYXRpbmcocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIGVsc2VcbiAgICAgICAgbWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24ocGFyYW1zLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgIG9wdGlvbnMgPSB7fVxuXG4gICAgICBtZXNzYWdlLnRoZW4gKG0pIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIG1cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcykgIyBwdWJsaXNoTWVzc2FnZVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICAgICRzY29wZS5lcnJvciA9IGVcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dpbk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwgPSAoY2FsbGJhY2ssIG1vZGFsQnV0dG9uVGV4dCwgc3F1YXJpZnkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkTW9kYWxDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAkc2NvcGUubW9kYWxCdXR0b25UZXh0ID0gbW9kYWxCdXR0b25UZXh0IG9yICdVcGxvYWQnXG4gICAgICAkc2NvcGUuc3F1YXJpZnkgPSBzcXVhcmlmeVxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdXBsb2FkLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ3VwbG9hZGluZycsIGJsb2JcbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnYnVmZmVyJywgYnVmZmVyXG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LmdlbmVyYXRlKCkudGhlbiAoa2V5KSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBrZXlcbiAgICAgICAgICBjb25zb2xlLmxvZyAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgJHNjb3BlLmRvd25sb2FkS2V5ID0gLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuICAgICAgJHNjb3BlLmxvYWREZWZhdWx0SW5kZXgoKVxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmxvZ29DbGlja2VkID0gLT5cbiAgICAgIGZvY3VzKCdzZWFyY2hGb2N1cycpXG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0J1xuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuZGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAjIFRPRE86IGNoZWNrIHNpZ1xuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50ID0gJHNjb3BlLm1lc3NhZ2UuZ2V0UmVjaXBpZW50KCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoZCkgLT5cbiAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGQpXG4gICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS5yZWNpcGllbnRfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnJlY2lwaWVudF9uYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUlEID0gJHNjb3BlLm1lc3NhZ2UuZ2V0U2lnbmVyS2V5SUQoKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UudmVyaWZpZWRCeSA9ICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlJRCwgJ2tleUlEJylcbiAgICAgIG1vZGFsSW5zdGFuY2UgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvc2hvdy5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgIG1vZGFsSW5zdGFuY2UucmVuZGVyZWQudGhlbiAtPlxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuICAgICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3RhcnQnLCAtPlxuICAgICAgICBtb2RhbEluc3RhbmNlLmNsb3NlKClcblxuICAgICRzY29wZS5maWx0ZXJzID0gJHNjb3BlLmZpbHRlcnMgb3IgY29uZmlnLmRlZmF1bHRGaWx0ZXJzXG5cbiAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuICAgICMgJHNjb3BlLm1lbnUgPSBNZW51cy5nZXRNZW51KCd0b3BiYXInKVxuXG4gICAgJHNjb3BlLnRvZ2dsZUNvbGxhcHNpYmxlTWVudSA9IC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSAhJHNjb3BlLmlzQ29sbGFwc2VkXG5cbiAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzID0gKG1lc3NhZ2VzLCBtc2dPcHRpb25zLCBmaW5kUmVjaXBpZW50KSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBtc2cuZGF0YSA9IG1zZy5zaWduZWREYXRhXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCRzY29wZS5pZGVudGlmaUluZGV4KVxuICAgICAgICBtc2cuYXV0aG9yLmd1bi5nZXQoJ3RydXN0RGlzdGFuY2UnKS5vbiAoZCkgLT4gbXNnLmF1dGhvclRydXN0RGlzdGFuY2UgPSBkXG4gICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChkKSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhkKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+IG1zZy5hdXRob3JfbmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cuYXV0aG9yX25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICBpZiBmaW5kUmVjaXBpZW50XG4gICAgICAgICAgbXNnLnJlY2lwaWVudCA9IG1zZy5nZXRSZWNpcGllbnQoJHNjb3BlLmlkZW50aWZpSW5kZXgpXG4gICAgICAgICAgbXNnLnJlY2lwaWVudC5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGQpIC0+XG4gICAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoZClcbiAgICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gbXNnLnJlY2lwaWVudF9uYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiBtc2cucmVjaXBpZW50X25hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgIyBUT0RPOiBtYWtlIHN1cmUgbWVzc2FnZSBzaWduYXR1cmUgaXMgY2hlY2tlZFxuXG4gICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvclswXVxuICAgICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgICBpID0gMFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEuYXV0aG9yW2ldWzBdKVxuICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yW2ldXG4gICAgICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIG1zZy5kYXRhLmF1dGhvcltpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbMF1cbiAgICAgICAgICBpID0gMFxuICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLnJlY2lwaWVudC5sZW5ndGhcbiAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMV1cbiAgICAgICAgICAgIGkrK1xuICAgICAgICAgIHNpZ25lZERhdGEgPSBtc2cuZGF0YVxuICAgICAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnJ1xuICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgICAgc3dpdGNoIHNpZ25lZERhdGEudHlwZVxuICAgICAgICAgICAgd2hlbiAndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rLXNpZ24nXG4gICAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLWVycm9yJ1xuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICAgICAgbXNnLmlzVW52ZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgICAgIHJhdGluZyA9IHNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBzaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgaWYgc2lnbmVkRGF0YS5jb250ZXh0ID09ICd2ZXJpZmllcidcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZmEgZmEtc2hpZWxkIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuXG4gICAgIyBDb2xsYXBzaW5nIHRoZSBtZW51IGFmdGVyIG5hdmlnYXRpb25cbiAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG5cbiAgICBzY3JvbGxUbyA9IChlbCkgLT5cbiAgICAgIGlmICFlbFxuICAgICAgICByZXR1cm5cbiAgICAgIHBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiBwb3MudG9wXG4gICAgICAgIGlmIHBvcy50b3AgLSA2MCA8ICR3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy50b3AgLSA2MFxuICAgICAgICBlbHNlIGlmIHBvcy5ib3R0b20gPiAkd2luZG93LnBhZ2VZT2Zmc2V0ICsgKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy5ib3R0b20gLSAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIDE1XG4gICAgICByZXR1cm5cblxuICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzID0gKGksIGh0bWxTYWZlLCBzZXRUaXRsZSkgLT5cbiAgICAgIGkudmVyaWZpZWQgPSBmYWxzZVxuICAgICAgaS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgbXZhID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuICAgICAgICAgIGlmIG12YS5uYW1lXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gbXZhLm5hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgICAgaS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgaS52ZXJpZmllZCA9IHRydWUgaWYgbXZhLm5hbWUudmVyaWZpZWRcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgICBpLmhhc1Byb3Blck5hbWUgPSB0cnVlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IE9iamVjdC52YWx1ZXMoYXR0cnMpWzBdLnZhbFxuICAgICAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWwgIT0gaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSBpLnByaW1hcnlOYW1lIGlmIHNldFRpdGxlXG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gLTFcbiAgICAgICAgICAgICRzY29wZS5hZGRFbnRyeUFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA+PSAwXG4gICAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID49IDBcbiAgICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5ICsgMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gMTNcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPT0gLTFcbiAgICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5jcmVhdGUnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgaWQgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldXG4gICAgICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaWQubGlua1RvLm5hbWUsIHZhbHVlOiBpZC5saW5rVG8udmFsIH1cbiAgICAgICAgd2hlbiAtMVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgIHdoZW4gMzMsIDM0LCAzNSwgMzYsIDM3LCAzOVxuICAgICAgICBlbHNlXG4gICAgICAgICAgZWwgPSBhbmd1bGFyLmVsZW1lbnQoZXZlbnQuY3VycmVudFRhcmdldClcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgd2FpdCA9IHNldFRpbWVvdXQoKC0+XG4gICAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9IGVsLnZhbCgpXG4gICAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICksIDMwMClcbiAgICAgICAgICAkc2NvcGUudGltZXIgPSB3YWl0XG4gICAgICAgICAgYnJlYWtcblxuICAgICRzY29wZS5kcm9wZG93blNlYXJjaFNlbGVjdCA9IChpdGVtKSAtPlxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGl0ZW0ubGlua1RvLm5hbWUsIHZhbHVlOiBpdGVtLmxpbmtUby52YWwgfSlcbiAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbl1cbiJdfQ==

(function() {
  'use strict';
  // Identities controller
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$q',
    '$timeout',
    'clipboard',
    // 'Authentication'
    'config',
    'localStorageService',
    'focus',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $q,
    $timeout,
    clipboard,
    config,
    localStorageService,
    focus) { //, Authentication
      var thumbsDownObj,
    thumbsUpObj;
      $scope.newEntry = {};
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      thumbsUpObj = {};
      thumbsDownObj = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newVerification = {
        type: '',
        value: ''
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
      $scope.$on('MessageAdded',
    function(event,
    args) {
        return $state.reload();
      });
      $scope.copyIdLink = function() {
        return clipboard.copyText($scope.idUrl);
      };
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params,
    recipient;
        recipient = [];
        linkTo = null;
        if (entry.name) {
          recipient.push(['name',
    entry.name]);
        }
        if (entry.email) {
          recipient.push(['email',
    entry.email]);
          linkTo = {
            type: 'email',
            value: entry.email
          };
        }
        if (entry.url) {
          recipient.push(['url',
    entry.url]);
          if (!linkTo) {
            linkTo = {
              type: 'url',
              value: entry.url
            };
          }
        }
        if (entry.phone) {
          recipient.push(['phone',
    entry.phone]);
          if (!linkTo) {
            linkTo = {
              type: 'phone',
              value: entry.phone
            };
          }
        }
        params = {
          type: 'verify_identity',
          recipient: recipient
        };
        return $scope.createMessage(event,
    params).then(function(response) {
          return $state.go('identities.show',
    linkTo);
        },
    function(error) {
          return console.log("error",
    error);
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.identifiLib.Attribute.guessTypeOf($scope.newVerification.value);
          if (!$scope.newVerification.type) {
            if (!$scope.newVerification.value.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/)) {
              return $scope.newVerification.type = 'name';
            }
          }
        } else {
          return $scope.newVerification.type = '';
        }
      };
      $scope.addName = function(name) {
        var recipient;
        if (name) {
          recipient = [[$scope.idType,
    $scope.idValue],
    ['name',
    name]];
          $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            return $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
          });
          return $scope.nameAdded = true;
        } else {
          $scope.addingName = true;
          return focus('addNameFocus');
        }
      };
      $scope.getConnections = function() {
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var alpha,
    c,
    conn,
    connections,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          console.log(attrs);
          connections = attrs || [];
          if (connections.length > 0) {
            c = connections[0];
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          $scope.connections = Object.values(connections).sort(function(a,
    b) {
            return (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref);
          });
          ref = $scope.connections;
          for (i = 0, len = ref.length; i < len; i++) {
            conn = ref[i];
            conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
            switch (conn.name) {
              case 'email':
                conn.iconStyle = 'glyphicon glyphicon-envelope';
                conn.btnStyle = 'btn-success';
                conn.link = 'mailto:' + conn.val;
                conn.quickContact = true;
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
                $scope.identity.hasProperName = true;
                conn.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
                $scope.identity.hasProperName = true;
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
                  $scope.ipfsGet(conn.val).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
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
              conn.link = ($scope.ipfsRoot || '') + conn.val;
              conn.linkName = conn.val;
              conn.iconStyle = 'glyphicon glyphicon-link';
              conn.btnStyle = 'btn-default';
            }
            if (conn.conf + conn.ref > 0) {
              percentage = conn.conf * 100 / (conn.conf + conn.ref);
              if (percentage >= 80) {
                alpha = conn.conf / mostConfirmations * 0.7 + 0.3;
              // conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
              } else if (percentage >= 60) {
                conn.rowClass = 'warning';
              } else {
                conn.rowClass = 'danger';
              }
            }
            $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
          }
          return $scope.connectionsLength = Object.keys($scope.connections).length;
        });
      };
      $scope.getConnectingMsgs = function(id1,
    id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('',
    10000,
    false,
    true).then(function(res) {
                res.forEach(function(row) {
                  var msg,
    ref;
                  msg = $window.identifiLib.Message.fromJws(row.value.jws);
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'verification' || ref === 'unverify_identity' || ref === 'unverification')) {
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
            var hasId1,
    hasId2,
    i,
    id,
    len,
    ref;
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
      $scope.connectionClicked = function(event,
    id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType,
    $scope.idValue],
    id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var cursor;
        if ($scope.sent.loading || !$scope.identity) {
          return;
        }
        $scope.sent.loading = true;
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        return $scope.identifiIndex.getSentMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(sent) {
          $scope.processMessages(sent,
    {
            authorIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent,
    sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        }).catch(function(error) {
          console.log('error loading sent messages',
    error);
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var cursor;
        if ($scope.received.loading || !$scope.identity) {
          return;
        }
        $scope.received.loading = true;
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        return $scope.identifiIndex.getReceivedMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(received) {
          $scope.processMessages(received,
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.received,
    received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            return received.forEach(function(msg) {
              if (msg.isPositive()) {
                if ($scope.thumbsUp.length < 12 && !thumbsUpObj[JSON.stringify(msg.signedData.author)]) {
                  thumbsUpObj[JSON.stringify(msg.signedData.author)] = true;
                  $scope.thumbsUp.push(msg);
                  return $scope.hasThumbsUp = true;
                }
              } else if (msg.isNegative() && $scope.thumbsDown.length < 12 && !thumbsDownObj[JSON.stringify(msg.signedData.author)]) {
                thumbsDownObj[JSON.stringify(msg.signedData.author)] = true;
                $scope.thumbsDown.push(msg);
                return $scope.hasThumbsDown = true;
              }
            });
          });
        }).catch(function(error) {
          console.log('error loading received messages',
    error);
          return $scope.received.finished = true;
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters,
    filters);
        $scope.sent = [];
        $scope.received = [];
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.uploadProfilePhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['profilePhoto',
    '/ipfs/' + files[0].path]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.hideProfilePhoto = true; // There's a weird bug where the profile identicon doesn't update
            $scope.identifiIndex.addMessage(m,
    $scope.ipfs).then(function() {
              return $scope.hideProfilePhoto = false;
            });
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['coverPhoto',
    '/ipfs/' + files[0].path]];
          return $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey).then(function(m) {
            $scope.identifiIndex.addMessage(m,
    $scope.ipfs);
            return $scope.uploadModal.close();
          });
        });
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo',
    true);
      };
      $scope.openCoverPhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadCoverPhoto,
    'Upload cover photo',
    false);
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          $scope.idUrl = $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          },
    {
            absolute: true
          });
        } else {
          $scope.idUrl = 'https://identi.fi/' + $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          });
        }
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        $scope.setPageTitle($scope.idValue);
        return $scope.$watch('apiReady',
    function(isReady) {
          if (isReady) {
            $scope.identity = $scope.identifiIndex.get($scope.idValue,
    $scope.idType);
            $scope.setIdentityNames($scope.identity,
    false,
    true);
            if ($scope.identity.gun) {
              $scope.identity.gun.on(function(data) {
                return $scope.identity.data = data;
              });
              $scope.identity.gun.get('attrs').on(function() {
                return $scope.getConnections();
              });
              $scope.identity.gun.get('sent').on(function() {
                return $scope.getSentMsgs(0);
              });
              $scope.identity.gun.get('received').on(function() {
                return $scope.getReceivedMsgs(0);
              });
              return $scope.identity.gun.get('scores').open(function(scores) {
                return $scope.scores = scores;
              });
            }
          }
        });
      };
      if ($state.is('identities.show')) {
        $scope.findOne();
      }
      if ($state.is('identities.create')) {
        focus('idNameFocus');
        return $scope.newEntry.name = $scope.capitalizeWords($scope.query.term);
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxXQU5tRTtJQU9uRSxPQVBtRTtJQVFuRSxJQVJtRTtJQVNuRSxVQVRtRTtJQVVuRSxXQVZtRTs7SUFZbkUsUUFabUU7SUFhbkUscUJBYm1FO0lBY25FLE9BZG1FO0lBZW5FLFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxTQUFwRDtJQUErRCxLQUEvRDtJQUFzRSxFQUF0RTtJQUEwRSxRQUExRTtJQUFvRixTQUFwRjtJQUErRixNQUEvRjtJQUNBLG1CQURBO0lBQ3FCLEtBRHJCLENBQUEsRUFBQTtBQUVFLFVBQUEsYUFBQTtJQUFBO01BQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0IsQ0FBQTtNQUNsQixNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUNuQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsS0FBRCxDQUFBO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLENBQUE7TUFDckIsV0FBQSxHQUFjLENBQUE7TUFDZCxhQUFBLEdBQWdCLENBQUE7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFD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QUFqQyxDQUFvQyxRQUFBLENBQUEsQ0FBQTt1QkFDbEMsTUFBTSxDQUFDLGNBQVAsQ0FBQTtjQURrQyxDQUFwQztjQUVBLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQXBCLENBQXdCLE1BQXhCLENBQStCLENBQUMsRUFBaEMsQ0FBbUMsUUFBQSxDQUFBLENBQUE7dUJBQ2pDLE1BQU0sQ0FBQyxXQUFQLENBQW1CLENBQW5CO2NBRGlDLENBQW5DO2NBRUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBcEIsQ0FBd0IsVUFBeEIsQ0FBbUMsQ0FBQyxFQUFwQyxDQUF1QyxRQUFBLENBQUEsQ0FBQTt1QkFDckMsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsQ0FBdkI7Y0FEcUMsQ0FBdkM7cUJBRUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBcEIsQ0FBd0IsUUFBeEIsQ0FBaUMsQ0FBQyxJQUFsQyxDQUF1QyxRQUFBLENBQUMsTUFBRCxDQUFBO3VCQUNyQyxNQUFNLENBQUMsTUFBUCxHQUFnQjtjQURxQixDQUF2QyxFQVRGO2FBSEY7O1FBRHdCLENBQTFCO01BaEJlO01BZ0NqQixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtRQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7TUFHQSxJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsbUJBQVYsQ0FBSDtRQUNFLEtBQUEsQ0FBTSxhQUFOO2VBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFoQixHQUF1QixNQUFNLENBQUMsZUFBUCxDQUF1QixNQUFNLENBQUMsS0FBSyxDQUFDLElBQXBDLEVBRnpCOztJQTNURixDQWZtRTtHQUFyRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIElkZW50aXRpZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICdjbGlwYm9hcmQnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJ2ZvY3VzJ1xuICAoJHNjb3BlLCAkc3RhdGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHEsICR0aW1lb3V0LCBjbGlwYm9hcmQsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgZm9jdXMpIC0+ICMsIEF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLm5ld0VudHJ5ID0ge31cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHN0YXRlLnJlbG9hZCgpXG5cbiAgICAkc2NvcGUuY29weUlkTGluayA9IC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgJHNjb3BlLmlkVXJsXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGxpbmtUbyA9IG51bGxcbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAnZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWwgfVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICd1cmwnLCB2YWx1ZTogZW50cnkudXJsIH0gdW5sZXNzIGxpbmtUb1xuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICdwaG9uZScsIHZhbHVlOiBlbnRyeS5waG9uZSB9IHVubGVzcyBsaW5rVG9cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuYWRkTmFtZSA9IChuYW1lKSAtPlxuICAgICAgaWYgbmFtZVxuICAgICAgICByZWNpcGllbnQgPSBbWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgWyduYW1lJywgbmFtZV1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UobSwgJHNjb3BlLmlwZnMpXG4gICAgICAgICRzY29wZS5uYW1lQWRkZWQgPSB0cnVlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5hZGRpbmdOYW1lID0gdHJ1ZVxuICAgICAgICBmb2N1cygnYWRkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW9ucyA9IC0+XG4gICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgYXR0cnNcbiAgICAgICAgY29ubmVjdGlvbnMgPSBhdHRycyBvciBbXVxuICAgICAgICBpZiBjb25uZWN0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgYyA9IGNvbm5lY3Rpb25zWzBdXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSBPYmplY3QudmFsdWVzKGNvbm5lY3Rpb25zKS5zb3J0IChhLCBiKSAtPlxuICAgICAgICAgIChiLmNvbmYgLSAyICogYi5yZWYpIC0gKGEuY29uZiAtIDIgKiBhLnJlZilcbiAgICAgICAgZm9yIGNvbm4gaW4gJHNjb3BlLmNvbm5lY3Rpb25zXG4gICAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5oYXNQcm9wZXJOYW1lID0gdHJ1ZVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuaGFzUHJvcGVyTmFtZSA9IHRydWVcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGNvbm4udmFsKS50aGVuIChjb3ZlclBob3RvKSAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybChkYXRhOmltYWdlO2Jhc2U2NCwnICsgY292ZXJQaG90by50b1N0cmluZygnYmFzZTY0JykgKyAnKScgfVxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4udmFsIGFuZCBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgY29ubi5saW5rID0gKCRzY29wZS5pcGZzUm9vdCBvciAnJykgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcblxuXG4gICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzID0gKGlkMSwgaWQyKSAtPlxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucyA9ICRxIChyZXNvbHZlKSAtPlxuICAgICAgICBpZiAhJHNjb3BlLnZlcmlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkSW5kZXhcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgICAgICAgIG1zZyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHJvdy52YWx1ZS5qd3MpXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ10pXG4gICAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucy50aGVuIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaGFzSWQxID0gaGFzSWQyID0gZmFsc2VcbiAgICAgICAgICBmb3IgaWQgaW4gbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgICAgICByZXR1cm4gbXNncy5wdXNoIG1zZyBpZiBpZFswXcKgPT0gaWQyLm5hbWUgYW5kIGlkWzFdID09IGlkMi52YWxcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUuc2VudC5sb2FkaW5nIG9yIG5vdCAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0U2VudE1zZ3MoJHNjb3BlLmlkZW50aXR5LCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKHNlbnQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgc2VudCwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgc2VudCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eVxuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0UmVjZWl2ZWRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChyZWNlaXZlZCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyByZWNlaXZlZCwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnJlY2VpdmVkLCByZWNlaXZlZClcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgcmVjZWl2ZWQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgcmVjZWl2ZWQuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgICAgaWYgbXNnLmlzUG9zaXRpdmUoKVxuICAgICAgICAgICAgICBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNVcE9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXVxuICAgICAgICAgICAgICAgIHRodW1ic1VwT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gdHJ1ZVxuICAgICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcC5wdXNoIG1zZ1xuICAgICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgbXNnLmlzTmVnYXRpdmUoKSBhbmQgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kIG5vdCB0aHVtYnNEb3duT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildXG4gICAgICAgICAgICAgIHRodW1ic0Rvd25PYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSB0cnVlXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duLnB1c2ggbXNnXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNEb3duID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgcmVjZWl2ZWQgbWVzc2FnZXMnLCBlcnJvclxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBmaWxlcywgJHNjb3BlLmlkZW50aXR5XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBbJ3Byb2ZpbGVQaG90bycsICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aF1dXG4gICAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KS50aGVuIChtKSAtPlxuICAgICAgICAgICRzY29wZS5oaWRlUHJvZmlsZVBob3RvID0gdHJ1ZSAjIFRoZXJlJ3MgYSB3ZWlyZCBidWcgd2hlcmUgdGhlIHByb2ZpbGUgaWRlbnRpY29uIGRvZXNuJ3QgdXBkYXRlXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtLCAkc2NvcGUuaXBmcykudGhlbiAtPlxuICAgICAgICAgICAgJHNjb3BlLmhpZGVQcm9maWxlUGhvdG8gPSBmYWxzZVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUudXBsb2FkQ292ZXJQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBmaWxlcywgJHNjb3BlLmlkZW50aXR5XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBbJ2NvdmVyUGhvdG8nLCAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhdXVxuICAgICAgICAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSkudGhlbiAobSkgLT5cbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKG0sICRzY29wZS5pcGZzKVxuICAgICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUub3BlblByb2ZpbGVQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8sICdVcGxvYWQgcHJvZmlsZSBwaG90bycsIHRydWUpXG5cbiAgICAkc2NvcGUub3BlbkNvdmVyUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5hdXRoZW50aWNhdGlvbi5pZGVudGl0eVxuICAgICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCgkc2NvcGUudXBsb2FkQ292ZXJQaG90bywgJ1VwbG9hZCBjb3ZlciBwaG90bycsIGZhbHNlKVxuXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgaWYgJHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCcuJykgPiAtMSAjIGRpZmZlcmVudGlhdGUgYmV0d2VlbiBsb2NhbGhvc3QgLyBjaHJvbWUgcGx1Z2luIHVyaSBhbmQgRE5TIG5hbWVcbiAgICAgICAgJHNjb3BlLmlkVXJsID0gJHN0YXRlLmhyZWYoJ2lkZW50aXRpZXMuc2hvdycsIHt0eXBlOiAkc2NvcGUuaWRUeXBlLCB2YWx1ZTogJHNjb3BlLmlkVmFsdWV9LCB7YWJzb2x1dGU6IHRydWV9KVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuaWRVcmwgPSAnaHR0cHM6Ly9pZGVudGkuZmkvJyArICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZTogJHNjb3BlLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5pZFZhbHVlfSlcbiAgICAgICRzY29wZS5pc0N1cnJlbnRVc2VyID0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uIGFuZFxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciBhbmRcbiAgICAgICAgJHNjb3BlLmlkVHlwZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgYW5kXG4gICAgICAgICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWVcbiAgICAgICRzY29wZS5pc1VuaXF1ZVR5cGUgPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZigkc2NvcGUuaWRUeXBlKSA+IC0xXG4gICAgICBpZiAhJHNjb3BlLmlzVW5pcXVlVHlwZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCcsIHsgc2VhcmNoOiAkc2NvcGUuaWRWYWx1ZSB9XG4gICAgICAgICRzY29wZS50YWJzWzJdLmFjdGl2ZSA9IHRydWUgaWYgJHNjb3BlLnRhYnNcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgJHNjb3BlLmlkVmFsdWVcbiAgICAgICRzY29wZS4kd2F0Y2ggJ2FwaVJlYWR5JywgKGlzUmVhZHkpIC0+XG4gICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLmlkVmFsdWUsICRzY29wZS5pZFR5cGUpXG4gICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5LCBmYWxzZSwgdHJ1ZSlcbiAgICAgICAgICBpZiAkc2NvcGUuaWRlbnRpdHkuZ3VuXG4gICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZGF0YSA9IGRhdGFcbiAgICAgICAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9uIC0+XG4gICAgICAgICAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkuZ3VuLmdldCgnc2VudCcpLm9uIC0+XG4gICAgICAgICAgICAgICRzY29wZS5nZXRTZW50TXNncygwKVxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3JlY2VpdmVkJykub24gLT5cbiAgICAgICAgICAgICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncygwKVxuICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ3Njb3JlcycpLm9wZW4gKHNjb3JlcykgLT5cbiAgICAgICAgICAgICAgJHNjb3BlLnNjb3JlcyA9IHNjb3Jlc1xuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmluZE9uZSgpXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgZm9jdXMoJ2lkTmFtZUZvY3VzJylcbiAgICAgICRzY29wZS5uZXdFbnRyeS5uYW1lID0gJHNjb3BlLmNhcGl0YWxpemVXb3Jkcygkc2NvcGUucXVlcnkudGVybSlcbl1cbiJdfQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFFBQUEsQ0FBQyxJQUFELEVBQU8sVUFBUCxFQUFtQixNQUFuQixFQUEyQixZQUEzQixFQUF5QyxPQUF6QyxFQUFrRCxtQkFBbEQsQ0FBQTtJQUNIO0lBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYO1dBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQyxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBQTtNQUNwQyxVQUFVLENBQUMsU0FBWCxHQUF1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsSUFBd0I7TUFDL0MsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBTyxDQUFDLElBQXpDO01BQ0EsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkM7YUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFtQixDQUFuQjtJQUpvQyxDQUF0QztFQUhHLENBRFA7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5ydW4gKCRsb2csICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHJvb3RTY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIGN1cnJlbnQsIHByZXZpb3VzKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAkc3RhdGUuY3VycmVudC50aXRsZSB8fCAnSWRlbnRpZmknXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGUnLCBjdXJyZW50Lm5hbWUpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGVQYXJhbXMnLCAkc3RhdGVQYXJhbXMpXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsQ0FBQTtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQTVCSixDQWlDRSxDQUFDLEtBakNILENBaUNTLGVBakNULEVBa0NJO01BQUEsR0FBQSxFQUFLLE1BQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWxDSixDQXNDRSxDQUFDLEtBdENILENBc0NTLE9BdENULEVBdUNJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXZDSjtXQTJDQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQTdDTSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgc2VhcmNoOiAnJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gR2xvYmFsIEFkZHJlc3MgQm9vaydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5jcmVhdGUnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL2lkZW50aXRpZXMvOnR5cGUvOnZhbHVlJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcycsXG4gICAgICAgIHVybDogJy9tZXNzYWdlcydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBMYXRlc3QgbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLnNob3cnLFxuICAgICAgICB1cmw6ICcvOmlkJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgLnN0YXRlICdhYm91dCcsXG4gICAgICAgIHVybDogJy9hYm91dCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9hYm91dC5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gQWJvdXQnXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19

(function() {
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWM7SUFGZCxDQURGO0lBSUEsb0JBQUEsRUFBc0IsQ0FDcEIsT0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsU0FQb0IsRUFRcEIsV0FSb0IsRUFTcEIsaUJBVG9CO0VBSnRCLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user && (newEntry.email || newEntry.url || newEntry.phone) && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-class="{active: ids.activeKey == -1}" ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry<span ng-if=query.term>: <span ng-bind=capitalizeWords(query.term)></span></span></a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 ng-if=result.verified></span> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=hideProfilePhoto></identicon><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230 ng-if=!hideProfilePhoto></identicon></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.data.mostVerifiedAttributes.name||identity.data.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.primaryName></span> <span class="glyphicon glyphicon-ok-sign" style=color:#337ab7 uib-tooltip="Verified by a trusted verifier" ng-if=identity.verified></span> <span ng-hide="!identity.data.mostVerifiedAttributes.nickname || identity.data.mostVerifiedAttributes.nickname == identity.data.mostVerifiedAttributes.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><div class=mar-bot10 ng-if="authentication.user && !identity.hasProperName && !nameAdded"><a href="" ng-click=addName() ng-hide=addingName>Add name</a><form class=form-inline ng-show=addingName ng-submit=addName(name)><div class=form-group><input focus-on=addNameFocus type=text class=form-control ng-model=name placeholder="Add name"></div><button type=submit class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button></form></div><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if="scores.verifier && scores.verifier.score > 0" class="text-center alert alert-info"><span class="fa fa-shield" style=font-size:2em></span><p>This identity is a <b>trusted verifier</b> in this web of trust. It can grant verification checkmarks.</p></div><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit m"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification</a></li></ul></div></div><div class=panel ng-show="filters.type.indexOf(\'rating\') === 0"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyIdLink() class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel ng-class="{\'mar-bot5\': (filters.type.indexOf(\'rating\') === 0)}"><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a>Verification></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><div ng-show="filters.type.indexOf(\'rating\') === 0" class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-bind="connectionsLength || 0"></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-resize="squarify ? {ratio:\'1:1\',centerCrop:true} : {}" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a> - a blog post outlining the concept</li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon ipfs=$parent.$parent.$parent.$parent.ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeySerialized></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeySerialized ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="text-center alert alert-info">Viewing as:<br class=hidden-sm><span ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.linkTo.name, value: viewpoint.linkTo.val })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint border=3 width=35></identicon></span><strong ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.val></strong></a></span><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verification\') }" ng-click="setFilters({type:\'verification\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" ipfs=ipfs msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs show-recipient=true msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signerKeyID ui-sref="identities.show({type: \'keyID\', value: message.signerKeyID })"></a> <strong><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyID })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signerKeyID}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon ipfs=$ctrl.ipfs identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" class=id-link><identicon ng-if=$ctrl.showRecipient ipfs=$ctrl.ipfs identity=$ctrl.msgData.recipient class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]"></span> </a>- <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfsUri || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);