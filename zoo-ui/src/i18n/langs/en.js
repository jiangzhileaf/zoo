import elementEnLocale from 'element-ui/lib/locale/lang/en'

const en = {
  zoo: {
    'hello': 'hello',
    'login': 'Login',
    'username': 'username',
    'password': 'password',
    'job': 'job',
    'jobSearch': 'job search',
    'jobCreate': 'job create',
    'data': 'data',
    'dashboard': 'dashboard',
    'monitor': 'monitor',
    'admin': 'admin',
    'userInfo': 'userInfo',
    'exit': 'exit'
  },
  desc: {
    'hadoop': 'Apache Hadoop is an open-source software framework used for distributed storage and processing of datasets of big data using the MapReduce programming model.',
    'hive': 'Apache Hive is a data warehouse software project built on top of Apache Hadoop for providing data summarization, query and analysis.',
    'flume': 'Flume is a distributed, reliable, and available service for efficiently collecting, aggregating, and moving large amounts of log data.',
    'storm': 'Apache Storm is a free and open source distributed realtime computation system.',
    'spark': 'Apache Spark is a powerful open source processing engine built around speed, ease of use, and sophisticated analytics. ',
    'kafka': 'Kafka is horizontally scalable, fault-tolerant, wicked fast, and runs in production in thousands of companies. '
  },
  ...elementEnLocale
}

export default en
