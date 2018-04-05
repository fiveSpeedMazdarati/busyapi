#test the busyapi POST
#
#
#
#!/bin/bash
totalcalls=100

starttime=`date +%s`

for i in $(seq 1 $totalcalls);
do
    curl -X POST -H "Content-Type: application/json" --data '{"patientId":"100","timestamp":"Tue Nov 01 2016 09:11:51 GMT-0500 (CDT)","medication":"Albuterol"}' http://localhost:3000/api/usages
done
endtime=`date +%s`
let totaltime=endtime-starttime

#echo Start Time: $starttime
#echo End Time: $endtime
echo
echo Total Time: $totaltime seconds to process $totalcalls API calls
