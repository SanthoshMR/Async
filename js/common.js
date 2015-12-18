const elem = $("#result");

function appendValue(type="", val="<br />") {
  $(elem).append(type + ": " + val + "<br />");
}

function asyncOperation(val) {
  return Promise.delay(5000)
    .then(() => {
    return val + 5;
  })
}

function promisesExample() {
  const type = "Promises";
  appendValue(type);
  asyncOperation(5)
  .then((val) => {
    appendValue(type, val);
    return asyncOperation(val);
  })
  .then((val) => {
    appendValue(type, val);
    return asyncOperation(val);
  })
  .then((val) => {
    appendValue(type, val);
    appendValue(type, "Done!");
  });

}

promisesExample();
appendValue("After Promises...");

Promise.spawn(function* generatorExample() {
  const type = "Generators";
  let val = yield asyncOperation(5);
  appendValue(type, val);
  val = yield asyncOperation(val);
  appendValue(type, val);
  val = yield asyncOperation(val);
  appendValue(type, val);
  appendValue(type, "Done!");
});

appendValue("After Generators");

async function asyncExample() {
  const type = "Async/Await";
  appendValue(type);
  let val = await asyncOperation(5);
  appendValue(type, val);
  val = await asyncOperation(val);
  appendValue(type, val);
  val = await asyncOperation(val);
  appendValue(type, val);
  appendValue(type, "Done!");
}

asyncExample();
appendValue("After Async Example");