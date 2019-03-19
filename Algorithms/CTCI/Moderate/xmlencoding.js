/*

XML Encoding: 

Since XML is very verbose, you are given a way of encoding it where 
each tag gets mapped to a pre-defined integer value. The language/grammar 
is as follows:

Element --> Tag Attributes END Children END 
Attribute --> Tag Value
END --> 0
Tag --> some predefined mapping to int 
Value --> string value

For example, the following XML might be converted into the compressed 
string below 

(assuming a mapping of family -> 1, person -> 2, 
  firstName -> 3, lastName -> 4, state -> 5).

<family lastName="McDowell" state="CA">
  <person firstName="Gayle">
    Some Message
  </person> 
</family>

Becomes:
1 4 McDowell 5 CA 0 2 3 Gayle 0 Some Message 0 0

1 4 McDowell 5 CA 0 
  2 3 Gayle 0 
    Some Message 
  0
0

Write code to print the encoded version of an XML element 
(passed in Element and Attribute objects).

*/

function encode(element, map) {
  let str = "";

  str += map[element.tagName].toLowerCase() + " ";
  let attr = element.attributes;

  for (let i = 0; i < attr.length; i++) {
    str += map[attr[i].name] + " ";
    str += attr[i].value + " ";
  }

  str += "0 ";
  str += element.innerHTML + " ";

  let ending = "";

  if (element.children.length) {
    for (let i = 0 ; i < element.children.length; i++) {
      str += encode(element.children[i]);
      ending += "0 ";
    }
  }

  return str + ending;
}