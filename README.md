## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById only takes a single input string that is the unique id , it returns only single element more specific than other query element. it is faster than others.

getElementByClassname takes a clssname as input value and returns an html collection with same classname(the value may be single or multiple). it automatically updates with dom changes. it is faster than query selector.we cannot use foreach loop directly on the returned element without converting it into an array.

querySelector takes any css element as value(id,class,tagname etc.) it returns only the first maching element only.it is slow because of css parsing.

querySelectorAll takes severel element as argument single or multiple comma separated value. it returns a nodelist object in document order. if no data found it returns empty nodelist.it doesnot changes with dom changes as it is just a snapshot.

### 2. How do you create and insert a new element into the DOM?

Ans: to insert a new element into the dom first we have to create it with document.creatElement('tagname'). then we have to configure it. after this we have to find the parent element where we want to insert it. then we can insert it using method like appedChild or anyother.

### 3. What is Event Bubbling? And how does it work?
Ans: Event bubbling is a mechanism where an event triggerd on an element bubbles up using the dom tree nodes. when an event is occured on an element it travels up to its parent element then to parents element then to its parent and so on. when a target element is hitted suppose a button clicked it works in three phases-
1. first the event goes down to capture the target element.
2. the event hits the target element.
3. the event travels up to the root.

### 4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a technique to handle the event attaching an eventlistner to the common parent using the concept of event bubblig. when an event occures the single listner finds the target by event.target and we can handle the event using handler.

this tecnique reduces the use of eventlistener. using single listener in parent can handle the entire node. this can dynamically handel the newly added element.


### 5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:the difference between preventDefault and stopPropagation is given bellow:-

 preventDefault() prevents something to do after an event. it prevents the default browser behavior after specific event. for example :- stopping a form from submitting and refresing the page. or toggling a checkbox etc. it does not stops propagation that means capturing and bubbling.

stopPropagation() stops propagation. it stops the event from bubbling up to parent or capturing down to child. it does not prevents browsers default behavior.


