
/**
 * Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
 * Weitere Informationen unter https://makecode.calliope.cc/blocks/custom
 */

/**
 * Benutzerdefinierte Blöcke
 */
//% weight=100 color=#0fbc11 icon=""
namespace microphone {
    /**
     * Returns percentage of microphone level
     * @param value Beschreibe den Wert hier, eg: 5
     */
    //% block="get sound of microphone (0-100)"
    export function getMicrophoneValue(): number {
      let min = 1023;
      let max = 0;
      let value = 0;
      for (let i = 0; i < 32; i++ ) {
        value = pins.analogReadPin(AnalogPin.MIC)
        if ( value > max ) {
           max = value
        } else if ( value < min ) {
           min = value
        }
      }
      return (( max - min ) * 977 / 10000)
    }
}
