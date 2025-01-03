using System;

namespace FMOD
{
	public enum RESULT
	{
		OK,
		ERR_ALREADYLOCKED,
		ERR_BADCOMMAND,
		ERR_CDDA_DRIVERS,
		ERR_CDDA_INIT,
		ERR_CDDA_INVALID_DEVICE,
		ERR_CDDA_NOAUDIO,
		ERR_CDDA_NODEVICES,
		ERR_CDDA_NODISC,
		ERR_CDDA_READ,
		ERR_CHANNEL_ALLOC,
		ERR_CHANNEL_STOLEN,
		ERR_COM,
		ERR_DMA,
		ERR_DSP_CONNECTION,
		ERR_DSP_FORMAT,
		ERR_DSP_NOTFOUND,
		ERR_DSP_RUNNING,
		ERR_DSP_TOOMANYCONNECTIONS,
		ERR_FILE_BAD,
		ERR_FILE_COULDNOTSEEK,
		ERR_FILE_DISKEJECTED,
		ERR_FILE_EOF,
		ERR_FILE_NOTFOUND,
		ERR_FILE_UNWANTED,
		ERR_FORMAT,
		ERR_HTTP,
		ERR_HTTP_ACCESS,
		ERR_HTTP_PROXY_AUTH,
		ERR_HTTP_SERVER_ERROR,
		ERR_HTTP_TIMEOUT,
		ERR_INITIALIZATION,
		ERR_INITIALIZED,
		ERR_INTERNAL,
		ERR_INVALID_ADDRESS,
		ERR_INVALID_FLOAT,
		ERR_INVALID_HANDLE,
		ERR_INVALID_PARAM,
		ERR_INVALID_POSITION,
		ERR_INVALID_SPEAKER,
		ERR_INVALID_SYNCPOINT,
		ERR_INVALID_VECTOR,
		ERR_MAXAUDIBLE,
		ERR_MEMORY,
		ERR_MEMORY_CANTPOINT,
		ERR_MEMORY_SRAM,
		ERR_NEEDS2D,
		ERR_NEEDS3D,
		ERR_NEEDSHARDWARE,
		ERR_NEEDSSOFTWARE,
		ERR_NET_CONNECT,
		ERR_NET_SOCKET_ERROR,
		ERR_NET_URL,
		ERR_NET_WOULD_BLOCK,
		ERR_NOTREADY,
		ERR_OUTPUT_ALLOCATED,
		ERR_OUTPUT_CREATEBUFFER,
		ERR_OUTPUT_DRIVERCALL,
		ERR_OUTPUT_ENUMERATION,
		ERR_OUTPUT_FORMAT,
		ERR_OUTPUT_INIT,
		ERR_OUTPUT_NOHARDWARE,
		ERR_OUTPUT_NOSOFTWARE,
		ERR_PAN,
		ERR_PLUGIN,
		ERR_PLUGIN_INSTANCES,
		ERR_PLUGIN_MISSING,
		ERR_PLUGIN_RESOURCE,
		ERR_PRELOADED,
		ERR_PROGRAMMERSOUND,
		ERR_RECORD,
		ERR_REVERB_INSTANCE,
		ERR_SUBSOUND_ALLOCATED,
		ERR_SUBSOUND_CANTMOVE,
		ERR_SUBSOUND_MODE,
		ERR_SUBSOUNDS,
		ERR_TAGNOTFOUND,
		ERR_TOOMANYCHANNELS,
		ERR_UNIMPLEMENTED,
		ERR_UNINITIALIZED,
		ERR_UNSUPPORTED,
		ERR_UPDATE,
		ERR_VERSION,
		ERR_EVENT_FAILED,
		ERR_EVENT_INFOONLY,
		ERR_EVENT_INTERNAL,
		ERR_EVENT_MAXSTREAMS,
		ERR_EVENT_MISMATCH,
		ERR_EVENT_NAMECONFLICT,
		ERR_EVENT_NOTFOUND,
		ERR_EVENT_NEEDSSIMPLE,
		ERR_EVENT_GUIDCONFLICT,
		ERR_EVENT_ALREADY_LOADED,
		ERR_MUSIC_UNINITIALIZED,
		ERR_MUSIC_NOTFOUND,
		ERR_MUSIC_NOCALLBACK
	}
}
