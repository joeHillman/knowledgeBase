function returnTicketName(str){
  const branchNameRegex = /(globe|consumer)(\-\d+)/gi;
  return branchNameRegex.exec(str)[0];
}

exports.returnTicketName = returnTicketName;
