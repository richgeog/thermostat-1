describe('Thermostat', function() {

  it("dispalys the default temperature", function(){
    expect('#temperature').toContainText('20');
  });
});