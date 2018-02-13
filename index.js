exports.compare = function(file1, file2) {
    describe('Compare files', function() {
        var url = 'http://localhost:8081/?file1='+file1+'&file2='+file2;
        var body = element(by.tagName('body'));

        browser.get(url).then(function() {
            body.getText().then(function(text) {
                expect(text).toEqual('true');
            }, function() {
                throw Error('ERROR: unknown error.');
            });
        }, function() {
            throw Error('ERROR: page is not visible in browser.');
        });
    });
};


