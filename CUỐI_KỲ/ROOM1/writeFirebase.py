from firebase import firebase
firebase = firebase.FirebaseApplication('https://iots-ute-3-default-rtdb.firebaseio.com', None)
room01 = '/ROOM01'
humi= '/humi'
led01= '/led01'
led02= '/led02'
led03= '/led03'
temp= '/temp'
result = firebase.put(room01,humi,'60')
result = firebase.put(room01,led01,'1')
result = firebase.put(room01,led02,'1')
result = firebase.put(room01,led03,'1')
result = firebase.put(room01,temp,'30')

room02 = '/ROOM02'
humi2= '/humi'
led012= '/led01'
led022= '/led02'
led032= '/led03'
temp2= '/temp'
result = firebase.put(room02,humi2,'60')
result = firebase.put(room02,led012,'0')
result = firebase.put(room02,led022,'0')
result = firebase.put(room02,led032,'0')
result = firebase.put(room02,temp2,'30')

room03 = '/ROOM03'
humi3= '/humi'
led013= '/led01'
led023= '/led02'
led033= '/led03'
temp3= '/temp'
result = firebase.put(room03,humi3,'60')
result = firebase.put(room03,led013,'1')
result = firebase.put(room03,led023,'1')
result = firebase.put(room03,led033,'0')
result = firebase.put(room03,temp3,'30')


