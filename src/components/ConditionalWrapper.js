const ConditionalWrapper = ({ condition, wrapper, altWrapper, children }) => {
	if (condition) {
		return wrapper(children)
	} else {
		return altWrapper(children)
	}
}

export default ConditionalWrapper
