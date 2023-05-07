**STREAMS**: used to process (read and write) data piece by piece (chunks), without completing the whole read or write operation and, therefore, without keeping all data in memory.

#### 4 TYPES OF STREAMS IN NODE.JS

| TYPE | DESCRIPTION | EXAMPLE | IMPORTANT EVENTS | IMPORTANT FUNCTIONS |
| ---- | ----------- |---------|---------------- | ------------------- |
| readable streams | streams from which we can read (consume) data | https requests, fs read streams | data, end | pipe(), read() |
| writable streams | streams from which we can write data | https responses, fs write streams | drain, finish | write(), end() |
| duplex streams | streams that are both readable and writable | net web socket |  |  |
| transform streams | duplex streams that transform data as it is read or written | zlib Gzip creation |  |  |
