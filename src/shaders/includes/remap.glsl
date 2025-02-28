/**
 * Remaps a value from one range to another.
 * For example: remap(0.5, 0.0, 1.0, 0.0, 10.0) converts 0.5 from range [0,1] to [0,10], resulting in 5.0
 * 
 * @param value The input value to be remapped
 * @param originMin The lower bound of the original range
 * @param originMax The upper bound of the original range
 * @param destinationMin The lower bound of the target range
 * @param destinationMax The upper bound of the target range
 * @return The remapped value in the new range
 */
float remap(float value, float originMin, float originMax, float destinationMin, float destinationMax)
{
    return destinationMin + (value - originMin) * (destinationMax - destinationMin) / (originMax - originMin);
}
