# ZOO design

## 存储-Storage 
1. 存储描述了一种数据存储的方式，系统侧重描述于存储的“读取”和“写入”方式。
2. 存储可能是线性存储模式，keyValue模式，关系型存储模式。
3. 对于不同的存储会提供不同的接口（增删改查）。
4. 包含一下可能类型
    - file
    - hive
    - hdfs
    - mysql
    - es
    - redis
    - kafka
    - hbase
    - phoenix
5. 当描述一个特定的存储时，需要包含具体的访问路径。

## 计算引擎-CalcEngine
1. 计算引擎包括：
    - 专门的与数据源无关的计算引擎，比如spark，storm;
    - 与数据源绑定的查询引擎，比如mysql查询，es查询;
2. 计算引擎应该需要包含，提交任务，查询任务状态，取消任务等接口;
3. 当描述一个特定计算引擎是，需要包含具体访问路径;

## 计算-Calc
1. 计算应该需要绑定到计算引擎的类型，而不需要绑定特定的计算引擎;
2. 对于不同的计算引擎类型需要提供不同的描述方式
    - sql（hive，mysql，phoenix)
    - 特定的DSL（es，redis）
    - 提交代码，jar包（mapReduce，hdfs，spark）

## 任务-Task
1. 任务就是描述一次特定的计算;包括输入什么，计算什么，结果输出到哪里。
2. 输入是一个Storage
3. 计算就是Calc
4. 输出是一个Storage

## 调度-CronJob
1. 支持定时调度任务，支持根据任务依赖触发调度
2. 任务描述支持时间表达式（${yyyyMMdd}...）
3. 任务依赖链中，上一个任务的结果可以作为下游任务的输入
4. 调度支持重试，同时运行多个任务

## 使用框架
- azkaban

## zoo-ui
- 基于vue全家桶搭建（vue，vue-router，vuex，elementUI）
- 页面，控制流，都由数据驱动
- 数据操作全部在vuex封装，一般先从后端ajax请求，缓存在vuex，以免用户刷新页面丢失状态，部分数据存储在localstorage或者cookies
