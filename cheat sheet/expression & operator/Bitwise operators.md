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


#### Bitwise AND
When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
| Operation | Result |
| --- | --- |
| 1111 & 0000 | 0000 |
| 1111 & 0001 | 0001 |
| 1111 & 0010 | 0010 |
| 1111 & 0100 | 0100 |
| 0 & 0 | 0 |
| 0 & 1 | 0 |
| 1 & 0 | 0 |
| 1 & 1 | 1 |

#### Bitwise OR
When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:

| Operation | Result |
| --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1  |
| 1 | 0 | 1 |
| 1 | 1 | 1 |
| 1111 | 0000 | 1111 |
| 1111 | 0001 | 1111 |
| 1111 | 0010 | 1111 |
| 1111 | 0100 | 1111 |


#### Bitwise XOR
When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:
| Operation | Result |
| --- | --- |
| 0 ^ 0 | 0 |
| 0 ^ 1 | 1  |
| 1 ^ 0 | 1 |
| 1 ^ 1 | 0  |
| 1111 ^ 0000 | 1111 |
| 1111 ^ 0001 | 1110 |
| 1111 ^ 0010 | 1101 |
| 1111 ^ 0100 | 1011 |





