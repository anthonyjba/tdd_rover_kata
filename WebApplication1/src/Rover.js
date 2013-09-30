function Rover() {    
}

Rover.prototype.start = function (x, y) {
    this.x = x;
    this.y = y;
}

Rover.prototype.facing = function (direction) {
    this.direction = direction;
}

Rover.prototype.move = function (command) {
    if (command.length > 0) {

        for (var i = 0; i < command.length; i++) {
            var currentStatus = command[i]; 
            if (currentStatus == "f" || currentStatus == "b")
            {
                switch (this.direction) {
                    case "N":
                        if (currentStatus == "f") { this.y++; }
                        else { this.y--; }
                        break;
                    case "S":
                        if (currentStatus == "f") { this.y--; }
                        else { this.y++; }
                        break;
                    case "W":
                        if (currentStatus == "f") { this.x--; }
                        else { this.x++; };
                        break;
                    case "E":
                        if (currentStatus == "f") { this.x++; }
                        else { this.x--; }
                        break;
                }
                
            }
            else if (currentStatus == "r") {
                switch (this.direction) {
                    case "N": this.direction = 'E'; break;
                    case "S": this.direction = 'W'; break;
                    case "W": this.direction = 'N'; break;
                    case "E": this.direction = 'S'; break;
                }
            }
            else if (command[i] == "l") {
                switch (this.direction) {
                    case "N": this.direction = 'W'; break;
                    case "S": this.direction = 'E'; break;
                    case "W": this.direction = 'S'; break;
                    case "E": this.direction = 'N'; break;
                }
            }
        }
    }
    this.endUpX = this.x;
    this.endUpY = this.y;
};