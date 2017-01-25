'use strict';

describe('my app', function() {

  describe('progress bars', function() {

    beforeEach(function() {
      browser.ignoreSynchronization = true;
      browser.get('dist/index.html');
      browser.wait(function() {
        return element.all(by.css('.progress-bar')).first().isPresent();
      }, 15000);

    });

    it('page should load and title is not empty', function() {
      expect(browser.getTitle()).toEqual('Progress Bars Demo');
    });

    it('should have 2 - 4 progress bars and buttons', function() {
      expect(element.all(by.css('.progress-bar')).count()).toMatch(/[2-4]/);
      expect(element.all(by.css('.progress-button')).count()).toMatch(/[2-4]/);
    });

    it('test progress bars', function() {
      var buttonAdd = element.all(by.css('.progress-button')).first();
      var buttonSub = element.all(by.css('.progress-button')).last();
      var select = element(by.id('progress-bar-items'));

      element.all(by.css('.progress-bar')).count().then(function(count){
        for (var i = 0; i < count; i++) {

          (function(index) {
            select.$('[value="#progress' + index + '"]').click().then(function(){
              var option = 'progress' + index;
              var bar = element.all(by.id(option));

              browser.wait(function() {
                return bar.getAttribute('data-percent').then(function(attr) {
                  if (parseInt(attr.toString()) < 100) {
                    buttonAdd.click();
                    return false;
                  }
                  else {
                    return true;
                  }
                });
              }, 5000);

              bar.getAttribute('data-percent').then(function(attr) {
                expect(attr.toString()).toEqual('100');
              });

              browser.wait(function() {
                return bar.getAttribute('data-percent').then(function(attr) {
                  if (parseInt(attr.toString()) > 0) {
                    buttonSub.click();
                    return false;
                  }
                  else {
                    return true;
                  }
                });
              }, 5000);

              bar.getAttribute('data-percent').then(function(attr) {
                expect(attr.toString()).toEqual('0');
              });
            });
              
          })(i);
        }
      });
    });
  });

});
