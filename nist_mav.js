function NIST_MAV(weight) {
    if (weight < 36) {
        return weight * 0.1;
    } else if (weight < 54) {
        return 3.6;
    } else if (weight < 81) {
        return 5.4;
    } else if (weight < 117) {
        return 7.2;
    } else if (weight < 154) {
        return 9.0;
    } else if (weight < 208) {
        return 10.8;
    } else if (weight < 263) {
        return 12.7;
    } else if (weight < 317) {
        return 14.5;
    } else if (weight < 318) {
        return 16.3;
    } else if (weight < 426) {
        return 18.1;
    } else if (weight < 489) {
        return 19.9;
    } else if (weight < 571) {
        return 21.7;
    } else if (weight < 635) {
        return 23.5;
    } else if (weight < 698) {
        return 25.4;
    } else {
        return 0.0;
    }
}
