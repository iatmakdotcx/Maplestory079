using System;

namespace FMOD
{
	public enum MEMORY_TYPE
	{
		NORMAL,
		STREAM_FILE,
		STREAM_DECODE,
		SAMPLEDATA = 4,
		DSP_OUTPUTBUFFER = 8,
		XBOX360_PHYSICAL = 1048576,
		PERSISTENT = 2097152,
		SECONDARY = 4194304
	}
}
