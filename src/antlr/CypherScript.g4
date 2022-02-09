grammar CypherScript;

import Cypher;

oC_Cypher
      :  SP? oC_Statement ( SP? ';' )? SP? EOF
         // The next line is the only addition to the official Cypher grammar.
         // It allows multiple statements, as long as they are separated by semicolons.
         | SP? oC_Statement ( SP? ';' SP? oC_Statement )* ( SP? ';' )? SP? EOF ;
