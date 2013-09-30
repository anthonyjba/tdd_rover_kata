describe("Rover", function () {
    var rover;

    beforeEach(function () {
        rover = new Rover();
        rover.start(0, 0);
    });

    it("should be able to start & direction the rover", function () {
        rover.facing('N');        
        expect(rover.x).toEqual(0);
        expect(rover.direction).toEqual('N');
    });

    it("should be able to move the rover to any directions", function () {
        rover.facing('N');
        rover.move('ffrfflff');
        expect(rover.direction).toEqual('N');
        expect(rover.endUpX).toEqual(2);
        expect(rover.endUpY).toEqual(4);
    });

});