# environment
- app
  - demo (SCIP)
  - kafka hello world
- db
  - postgres
- kafka (big and heavy)
  - LinkedIn
  - OS streaming platform (2011)
  - topics
  - pub/sub
  - confluent platform
  - schema registry
  - connect API
  - streams API (ksql)
  - docker-compose (https://github.com/confluentinc/cp-all-in-one)
  - AWS managed service (https://www.confluent.io/aws/)


# current
```
app -> db -> rapidminer -> db -> app
                |
                --> db
```
go for message queue -> RabitMQ

no implementation yet

# immediate

scip the implementation

```
app -> db -> kafka -> app
                |
                --> db
```

# alternative
```
app -> kafka -> db
          |
          --> app
```

# steps

1. app -> db
1. app -> db -> kafka -> app
1. app -> db -> kafka -> db
