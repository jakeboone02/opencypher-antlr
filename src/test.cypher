MATCH () RETURN * ; /* COMMENT BETWEEN */ MATCH () // inline comment
  RETURN *;

MATCH (c:Company {name: 'Neo4j'})
RETURN c;

MATCH (p:Person)
WHERE p.name = 'Jennifer'
RETURN p;

MATCH (t:Technology)-[:LIKES]-(a:Person {name: 'Jennifer'})
RETURN t.type;

//null and boolean values are lower case
MATCH (p:Person)
WHERE p.birthdate = null
  SET missingBirthdate = true
RETURN p;

MATCH (:Person)-->(vehicle:Car)-->(:Company)<--
      (:Country)
RETURN count(vehicle);

MATCH (:Person {name: 'Kate'})-[:LIKES]-(c:Car)
RETURN c.type;

MATCH (:Person)-->(vehicle:Car), (vehicle:Car)-->(:Company)
RETURN count(vehicle);

MATCH (manufacturer:Company)<--(vehicle:Car)<--()
WHERE manufacturer.foundedYear < 2000
RETURN vehicle.mileage;

MATCH (p:Person {name: 'Bob'})-[:KNOWS {since: 2016}]->(other:Person)
RETURN other.name;

WITH ['Sally', 'Mark', 'Alice'] as list
MATCH (c:Customer), (e:Employee)
WHERE c.name IN list
AND (c)-[:IS_ASSIGNED_TO]-(e)
RETURN c.name, e.name as customerContact;

//indent 2 spaces on lines with ON CREATE or ON MATCH
MATCH (p:Person {name: 'Alice'})
MERGE (c:Company {name: 'Wayne Enterprises'})
MERGE (p)-[rel:WORKS_FOR]-(c)
  ON CREATE SET rel.startYear = date({year: 2018})
  ON MATCH SET rel.updated = date()
RETURN p, rel, c;

//indent 2 spaces with braces for subqueries
// MATCH (p:Person)
// WHERE EXISTS {
//   MATCH (p)-->(c:Company)
//   WHERE c.name = 'Neo4j'
// }
// RETURN p.name;
