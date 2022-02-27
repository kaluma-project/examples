/**
 * Example: Digital Write
 * Write digital value to LED
 */

const pin = 15;
pinMode(pin, OUTPUT);

// turn on LED
digitalWrite(pin, HIGH);

// wait 3 seconds
delay(3000);

// turn off LED
digitalWrite(pin, LOW);
