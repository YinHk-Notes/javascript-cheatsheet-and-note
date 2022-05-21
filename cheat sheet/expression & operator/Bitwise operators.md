## Bitwise operators
A bitwise operator treats their operands as a set of 32 bits (zeros and ones), rather than as decimal, hexadecimal, or octal numbers. For example, the decimal number nine has a binary representation of 1001. Bitwise operators perform their operations on such binary representations, but they return standard JavaScript numerical values.


| Operator | Usage | Description |
| --- | --- | --- |
| Bitwise AND | a & b | Returns a one in each bit position for which the corresponding bits of both operands are ones. |
| Bitwise OR | a | b | Returns a zero in each bit position for which the corresponding bits of both operands are zeros. |
| Bitwise XOR | a ^ b | Returns a zero in each bit position for which the corresponding bits are the same. [Returns a one in each bit position for which the corresponding bits are different.] |
| Bitwise NOT | ~ a | Inverts the bits of its operand. |
| Left shift | a << b | Shifts a in binary representation b bits to the left, shifting in zeros from the right. |
| Sign-propagating right shift | a >> b | Shifts a in binary representation b bits to the right, discarding bits shifted off. |
| Zero-fill right shift | a >>> b | Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left. |
