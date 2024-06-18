import createEmployeesObject from './11-createEmployeesObject.js';
import createReportObject from './12-createReportObject.js';

export default function createIteratorObject(report) {
	let iterator = [];
	for (let list of Object.values(report.allEmployees)) {
		iterator.push(...list);
	}

	return iterator;
}

const employees = {
	    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
	    ...createEmployeesObject('marketing', ['Sylvie'])
};

const report = createReportObject(employees);

const reportWithIterator = createIteratorObject(report);

for (const item of reportWithIterator) {
	    console.log(item);
}
